import { List as GenericList } from '@/Pages/App/Components';
import { CategoryTools } from '@/Pages/App/Components/CategoryTools';
import { Confirmation } from '@/Pages/App/Components/Confirmation';
import { ProductsIcon } from '@/Pages/App/Components/Header/Dashboard/DashboardItem/ProductsIcon';
import { Pagination } from '@/Pages/App/Components/Pagination';
import { Tools, ToolsType } from '@/Pages/App/Components/Tools';
import {
    SelectionTargetKey,
    makeConfirmCancel,
    makeListHandlers,
    makeToolHandlers,
    mountItem,
    useConfirmYes,
    useProductRemotion,
    useProductResponse,
    useProductsReducer,
    useProductsRequest,
} from '@/Pages/App/Screens/Product/List/libraries';
import {
    useAppDispatch,
    useInitPage,
    useSelections,
} from '@/Pages/App/libraries';
import { columnSizeDB, paginationSetting } from '@/Pages/App/settings';
import { useTranslate } from '@/libraries';
import { useParams } from 'react-router-dom';

const List = () => {
    const translate = useTranslate();
    const appDispatch = useAppDispatch();
    const { target } = useParams() as { target: SelectionTargetKey };
    useInitPage(target ? 'select-product' : 'product-index-title');

    const [state, dispatch] = useProductsReducer();
    const [store] = useProductsRequest(state);
    useProductResponse(store, dispatch);

    const [doRemotion] = useProductRemotion(dispatch);

    const { action } = useSelections() || {};
    const toolsHandlers = makeToolHandlers();
    const listHandlers = makeListHandlers();

    const onConfirmYes = useConfirmYes(dispatch, doRemotion, state.idRemoved);
    const onConfirmCancel = makeConfirmCancel(dispatch);

    if (store.error) {
        return null;
    }
    return (
        <>
            <Tools
                placeholderKey='product-filter-placeholder'
                toolLabelKey='filter-label'
                toolType={ToolsType.REQUEST_NAME}
                addLink={!target ? '/products/create' : undefined}
                onAddClick={toolsHandlers.makeAddClick(appDispatch)}
                maxLength={columnSizeDB.product}
                onToolChange={toolsHandlers.makeToolChange(dispatch)}
            >
                <CategoryTools
                    showCategories={!target}
                    onChange={toolsHandlers.makeCategoryToolsChange(dispatch)}
                />
                <Pagination
                    page={state.page}
                    lastPage={state.lastPage}
                    group={state.group}
                    groups={paginationSetting.groupList}
                    total={state.qty}
                    totalLabel={translate('total', true)}
                    onChangePage={toolsHandlers.makeChangePage(dispatch)}
                    onChangeGroup={toolsHandlers.makeChangeGroup(dispatch)}
                />
            </Tools>
            <GenericList
                dataList={state.products}
                urlPrefix='/products'
                emptyListKey='product-empty-list'
                iconNoPhoto={<ProductsIcon className='products-list-default' />}
                onRemove={listHandlers.makeItemRemove(dispatch)}
                onUpdate={listHandlers.makeItemUpdate(appDispatch)}
                makeItem={mountItem(target, action, appDispatch)}
            />
            <Confirmation
                showConfirm={Boolean(state.idRemoved && state.preConfirm)}
                question={translate('question-remove', true)}
                onYes={onConfirmYes}
                onNo={onConfirmCancel}
                onClose={onConfirmCancel}
            />
        </>
    );
};

export { List as ProductList };
