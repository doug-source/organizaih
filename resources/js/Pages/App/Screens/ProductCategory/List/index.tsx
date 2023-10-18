import { Confirmation } from '@/Pages/App/Components/Confirmation';
import { List as GenericList } from '@/Pages/App/Components/List';
import { ListSelectRow } from '@/Pages/App/Components/ListSelectRow';
import { Pagination } from '@/Pages/App/Components/Pagination';
import { Tools, ToolsType } from '@/Pages/App/Components/Tools';
import { SelectionTargetKey } from '@/Pages/App/Screens/ProductCategory/List/libraries';
import { ContextPack } from '@/Pages/App/Screens/ProductCategory/List/libraries/contexts';
import {
    makeCategorySelection,
    makeConfirmCancelDefault,
    makeConfirmCancelSelection,
    makePaginationHandlers,
    makeToolChange,
} from '@/Pages/App/Screens/ProductCategory/List/libraries/handlers';
import {
    useConfirmYesDefaultHandler,
    useConfirmYesSelectionHandler,
    useProductCategoriesRequest,
    useProductCategoriesResponse,
    useProductCategoryReduce,
    useProductCategoryRemotion,
} from '@/Pages/App/Screens/ProductCategory/List/libraries/hooks';
import { ListItemProdCategory_ } from '@/Pages/App/Screens/ProductCategory/List/styling';
import { IProductCategory } from '@/Pages/App/Screens/ProductCategory/types';
import { DeletionReducerEnum } from '@/Pages/App/libraries';
import {
    useAppDispatch,
    useInitPage,
    useSelections,
} from '@/Pages/App/libraries/hooks';
import { columnSizeDB, paginationSetting } from '@/Pages/App/settings';
import { useTranslate } from '@/libraries';
import { useParams } from 'react-router-dom';

const List = () => {
    const translate = useTranslate();
    const appDispatch = useAppDispatch();
    const selection = useSelections();
    const { action } = selection;

    const { target } = useParams() as { target: SelectionTargetKey };
    useInitPage(
        target ? 'select-product-category' : 'product-category-index-title',
    );

    const [state, dispatch] = useProductCategoryReduce();
    const [store] = useProductCategoriesRequest(state);
    useProductCategoriesResponse(store, dispatch);
    const [doRemotion] = useProductCategoryRemotion(dispatch);

    const onConfirmYesDefault = useConfirmYesDefaultHandler(
        state,
        dispatch,
        doRemotion,
    );
    const onConfirmYesSelection = useConfirmYesSelectionHandler(target, action);

    const paginationHandlers = makePaginationHandlers();
    const onConfirmCancelDefault = makeConfirmCancelDefault(dispatch);
    const onConfirmCancelSelection = makeConfirmCancelSelection(dispatch);

    if (store.error) {
        return null;
    }
    return (
        <ContextPack
            action={action}
            target={target}
            dispatch={dispatch}
        >
            <>
                <Tools
                    placeholderKey='category'
                    toolType={ToolsType.REQUEST_NAME}
                    maxLength={columnSizeDB.productCategory}
                    addLink={target ? undefined : '/product-categories/create'}
                    onToolChange={makeToolChange(dispatch)}
                />
                <Pagination
                    page={state.page}
                    lastPage={state.lastPage}
                    group={state.group}
                    groups={paginationSetting.groupList}
                    total={state.qty}
                    totalLabel={translate('total', true)}
                    onChangePage={paginationHandlers.makeChangePage(dispatch)}
                    onChangeGroup={paginationHandlers.makeChangeGroup(dispatch)}
                />
                <GenericList
                    dataList={state.categories}
                    emptyListKey='customer-empty-list'
                    makeItem={(data: IProductCategory, index: number) => {
                        if (action && target) {
                            return (
                                <ListSelectRow
                                    data={data}
                                    key={data.id}
                                    index={index}
                                    action={action}
                                    target={target}
                                    onClick={makeCategorySelection(
                                        data,
                                        target,
                                        appDispatch,
                                    )}
                                />
                            );
                        }
                        return (
                            <ListItemProdCategory_
                                key={data.id}
                                data={data}
                                index={index}
                                urlPrefix='/product-categories'
                                onRemove={() => {
                                    dispatch({
                                        type: DeletionReducerEnum.PREPARE_DELETE,
                                        payload: data,
                                    });
                                }}
                            />
                        );
                    }}
                />
                <Confirmation
                    showConfirm={Boolean(state.idRemoved && state.preConfirm)}
                    question={translate('question-remove', true)}
                    onYes={onConfirmYesDefault}
                    onNo={onConfirmCancelDefault}
                    onClose={onConfirmCancelDefault}
                />
                <Confirmation
                    showConfirm={Boolean(target && state.default)}
                    question={`${translate(
                        'use-product-category-default',
                        true,
                    )}?`}
                    onYes={onConfirmYesSelection}
                    onNo={onConfirmCancelSelection}
                    onClose={onConfirmCancelSelection}
                />
            </>
        </ContextPack>
    );
};

export { List as ProductCategoryList };
