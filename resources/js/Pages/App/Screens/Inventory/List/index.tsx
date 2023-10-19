import { Confirmation } from '@/Pages/App/Components/Confirmation';
import { ProductsIcon } from '@/Pages/App/Components/Header/Dashboard/DashboardItem/ProductsIcon';
import { List as GenericList } from '@/Pages/App/Components/List';
import { TextContent_ } from '@/Pages/App/Components/ListItem';
import { Pagination } from '@/Pages/App/Components/Pagination';
import { PhotoListItem } from '@/Pages/App/Components/PhotoListItem';
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
import {
    InventoryListItem_,
    TextItemQty_,
} from '@/Pages/App/Screens/Inventory/List/styling';
import {
    DeletionReducerEnum,
    useAppDispatch,
    useInitPage,
} from '@/Pages/App/libraries';
import { columnSizeDB, paginationSetting } from '@/Pages/App/settings';
import { useTranslate } from '@/libraries';
import { Suspense } from 'react';

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
                    return (
                        <InventoryListItem_
                            data={data}
                            index={index}
                            urlPrefix='/inventories'
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
                            innerColumns={
                                <>
                                    <PhotoListItem
                                        iconNoPhoto={
                                            <Suspense>
                                                <ProductsIcon />
                                            </Suspense>
                                        }
                                        photo={data.productPhoto}
                                    />
                                    <TextItemQty_>
                                        <TextContent_>{`(${String(
                                            data.qty,
                                        ).padStart(2, '0')})`}</TextContent_>
                                    </TextItemQty_>
                                </>
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
