import { BoundaryDateInputs } from '@/Pages/App/Components/BoundaryDateInputs';
import { Confirmation } from '@/Pages/App/Components/Confirmation';
import { InputRequest } from '@/Pages/App/Components/InputRequest';
import { List as GenericList } from '@/Pages/App/Components/List';
import { ListItem } from '@/Pages/App/Components/ListItem';
import { Pagination } from '@/Pages/App/Components/Pagination';
import { PhotoListItem } from '@/Pages/App/Components/PhotoListItem';
import { SalesReducerEnum } from '@/Pages/App/Screens/Sales/List/libraries/enums';
import {
    makeAddClickHandler,
    makeChangeGroup,
    makeChangePage,
    makeConfirmCancel,
    makeListItemRemove,
    makeListItemUpdate,
} from '@/Pages/App/Screens/Sales/List/libraries/handlers';
import {
    useConfirmYesHandler,
    useSaleReducer,
    useSaleRemotion,
    useSaleRequest,
    useSaleResponse,
} from '@/Pages/App/Screens/Sales/List/libraries/hooks';
import { Tools_ } from '@/Pages/App/Screens/Sales/List/styling';
import { useAppDispatch, useInitPage } from '@/Pages/App/libraries/hooks';
import { AnonymousSVG } from '@/Pages/App/libraries/icons/asynchronous';
import { columnSizeDB, paginationSetting } from '@/Pages/App/settings';
import { useTranslate } from '@/libraries';
import { Suspense } from 'react';

const List = () => {
    const translate = useTranslate();
    const appDispatch = useAppDispatch();
    useInitPage('sale-index-title');

    const [state, dispatch] = useSaleReducer();
    const [storeSales] = useSaleRequest(
        state.endpoint,
        state.page,
        state.group,
        state.dtStart,
        state.dtEnd,
        state.productName,
        state.customerName,
    );
    useSaleResponse(
        storeSales.error,
        storeSales.data,
        storeSales.status,
        dispatch,
    );
    const [doRemotion] = useSaleRemotion(dispatch);

    const onConfirmYes = useConfirmYesHandler(
        state.idRemoved,
        dispatch,
        doRemotion,
    );
    const onConfirmCancel = makeConfirmCancel(dispatch);

    if (storeSales.error) {
        return null;
    }
    return (
        <>
            <Tools_
                addLink='/sales/create'
                onAddClick={makeAddClickHandler(appDispatch)}
                otherFilters={
                    <>
                        <InputRequest
                            placeholderKey='product-filter-placeholder'
                            maxLength={columnSizeDB.product}
                            onClick={(payload: string) =>
                                dispatch({
                                    type: SalesReducerEnum.INCLUDE_PRODUCT_NAME,
                                    payload,
                                })
                            }
                        />
                        <InputRequest
                            placeholderKey='customer-filter-placeholder'
                            maxLength={columnSizeDB.customer}
                            onClick={(payload: string) =>
                                dispatch({
                                    type: SalesReducerEnum.INCLUDE_CUSTOMER_NAME,
                                    payload,
                                })
                            }
                        />
                        <BoundaryDateInputs
                            dtStart={state.dtStart}
                            dtEnd={state.dtEnd}
                            onFirstDateChanged={(payload) => {
                                dispatch({
                                    type: SalesReducerEnum.INCLUDE_DT_START,
                                    payload,
                                });
                            }}
                            onLastDateChanged={(payload) => {
                                dispatch({
                                    type: SalesReducerEnum.INCLUDE_DT_END,
                                    payload,
                                });
                            }}
                        />
                    </>
                }
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
            </Tools_>
            <GenericList
                dataList={state.sales}
                emptyListKey='sale-empty-list'
                makeItem={(data, index) => (
                    <ListItem
                        key={data.id}
                        id={data.id}
                        contentLinked={
                            <>
                                <div title={data.created_at}>
                                    {data.created_at}
                                </div>
                                <div title={data.customerName}>
                                    {data.customerName}
                                </div>
                            </>
                        }
                        urlLink={`/sales/${data.id}`}
                        index={index}
                        innerColumns={
                            <PhotoListItem
                                iconNoPhoto={
                                    <Suspense>
                                        <AnonymousSVG />
                                    </Suspense>
                                }
                                photo={data.customerPhoto}
                            />
                        }
                        onUpdate={makeListItemUpdate(appDispatch)}
                        onRemove={makeListItemRemove(dispatch, data)}
                    />
                )}
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

export { List as SaleList };
