import { Confirmation } from '@/Pages/App/Components/Confirmation';
import { List as GenericList } from '@/Pages/App/Components/List';
import { ListItemButtons } from '@/Pages/App/Components/ListItemButtons';
import { ListItemLinked } from '@/Pages/App/Components/ListItemLinked';
import { Pagination } from '@/Pages/App/Components/Pagination';
import { PhotoListItem } from '@/Pages/App/Components/PhotoListItem';
import { ProductsIcon } from '@/Pages/App/Components/ProductsIcon';
import { Tools, ToolsType } from '@/Pages/App/Components/Tools';
import {
    makeAddClick,
    makeChangeGroup,
    makeChangePage,
    makeConfirmCancel,
    makeToolChange,
} from '@/Pages/App/Screens/Inventory/List/libraries/handlers';
import {
    useConfirmationYes,
    useInventoriesReducer,
    useInventoriesRequest,
    useInventoriesResponse,
    useInventoryRemotion,
} from '@/Pages/App/Screens/Inventory/List/libraries/hooks';
import { ListItemColumnQty_ } from '@/Pages/App/Screens/Inventory/List/styling';
import {
    DeletionReducerEnum,
    useAppDispatch,
    useInitPage,
} from '@/Pages/App/libraries';
import { columnSizeDB, paginationSetting } from '@/Pages/App/settings';
import { useTranslate } from '@/libraries';
import { navigations } from '@/settings';

const List = () => {
    const appDispatch = useAppDispatch();
    const translate = useTranslate();
    useInitPage('inventory-index-title');

    const [state, dispatch] = useInventoriesReducer();
    const [store] = useInventoriesRequest(state);
    const [doRemotion] = useInventoryRemotion(dispatch);
    useInventoriesResponse(store, dispatch);

    const confirmYesHandler = useConfirmationYes(dispatch, doRemotion, state);
    const confirmCancelHandler = makeConfirmCancel(dispatch);
    const addClickHandler = makeAddClick(appDispatch);
    const toolChangeHandler = makeToolChange(dispatch);

    if (store.error) {
        return null;
    }
    return (
        <>
            <Tools
                placeholderKey='product-filter-placeholder'
                toolLabelKey='filter-label'
                toolType={ToolsType.REQUEST_NAME}
                addLink='/inventories/create'
                onAddClick={addClickHandler}
                maxLength={columnSizeDB.product}
                onToolChange={toolChangeHandler}
            >
                <Pagination
                    page={state.page}
                    lastPage={state.lastPage}
                    group={state.group}
                    groups={paginationSetting.groupList}
                    total={state.qty}
                    totalLabel={translate('total', true)}
                    onChangePage={makeChangePage(dispatch)}
                    onChangeGroup={makeChangeGroup(dispatch)}
                />
            </Tools>
            <GenericList
                dataList={state.list}
                emptyListKey='inventories-empty-list'
                makeItem={(data, index) => {
                    const qtyText = `(${String(data.qty).padStart(2, '0')})`;
                    return (
                        <ListItemLinked
                            key={data.id}
                            index={index}
                            urlLink={navigations.inventory.show(data.id)}
                            titleLink={data.name}
                            contentLink={data.name}
                            firstColumns={
                                <>
                                    <PhotoListItem
                                        iconNoPhoto={<ProductsIcon />}
                                        photo={data.productPhoto}
                                    />
                                    <ListItemColumnQty_ title={qtyText}>
                                        {qtyText}
                                    </ListItemColumnQty_>
                                </>
                            }
                            lastColumns={
                                <ListItemButtons
                                    urlLink={navigations.inventory.show(
                                        data.id,
                                    )}
                                    id={data.id}
                                    updateBtn={false}
                                    onRemove={() => {
                                        dispatch({
                                            type: DeletionReducerEnum.PREPARE_DELETE,
                                            payload: {
                                                productID: data.id,
                                                productName: data.name,
                                                productPhoto: data.productPhoto,
                                                qty: data.qty,
                                            },
                                        });
                                    }}
                                />
                            }
                        />
                    );
                }}
            />
            <Confirmation
                showConfirm={Boolean(state.idRemoved && state.preConfirm)}
                question={
                    translate('remove-all-items-this-product', true) + '?'
                }
                onYes={confirmYesHandler}
                onNo={confirmCancelHandler}
                onClose={confirmCancelHandler}
            />
        </>
    );
};

export { List as InventoryList };
