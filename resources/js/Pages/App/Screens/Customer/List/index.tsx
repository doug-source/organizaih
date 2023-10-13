import {
    Confirmation,
    List as GenericList,
    Pagination,
} from '@/Pages/App/Components';
import { ListItem } from '@/Pages/App/Components/ListItem';
import { ListSelectRow } from '@/Pages/App/Components/ListSelectRow';
import { ToolsType } from '@/Pages/App/Components/Tools';
import {
    makeChangeGroup,
    makeChangePage,
    makeToolChange,
    useConfirmationCancel,
    useConfirmationYes,
    useCustomerRemotion,
    useCustomerRequest,
    useCustomerResponse,
    useCustomersReducer,
} from '@/Pages/App/Screens/Customer/List/libraries';
import {
    makeClientSelection,
    makeRemoveItem,
} from '@/Pages/App/Screens/Customer/List/libraries/handlers';
import {
    AnonymousSVG_,
    Tools_,
} from '@/Pages/App/Screens/Customer/List/styling';
import {
    ICustomerListData,
    SelectionTargetKey,
} from '@/Pages/App/Screens/Customer/List/types';
import {
    useAppDispatch,
    useInitPage,
    useSelections,
} from '@/Pages/App/libraries';
import { columnSizeDB, paginationSetting } from '@/Pages/App/settings';
import { useTranslate } from '@/libraries';
import { Suspense } from 'react';
import { useParams } from 'react-router-dom';

export const List = () => {
    const translate = useTranslate();
    const appDispatch = useAppDispatch();
    const { target } = useParams() as { target: SelectionTargetKey };

    useInitPage(target ? 'select-customer' : 'customer-index-title');

    const selection = useSelections();
    const { action } = selection;

    const [state, dispatch] = useCustomersReducer();
    const [store] = useCustomerRequest(
        state.endpoint,
        state.page,
        state.group,
        state.search,
    );
    useCustomerResponse(store.data, store.status, store.error, dispatch);
    const [doRemotion] = useCustomerRemotion(dispatch);
    const onConfirm = useConfirmationYes(dispatch, doRemotion, state.idRemoved);
    const onConfirmCancel = useConfirmationCancel(dispatch);

    if (store.error) {
        return null;
    }
    return (
        <>
            <Tools_
                placeholderKey='customer-filter-placeholder'
                toolLabelKey='filter-label'
                toolType={ToolsType.REQUEST_NAME}
                addLink={target ? undefined : '/customers/create'}
                maxLength={columnSizeDB.customer}
                onToolChange={makeToolChange(dispatch)}
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
                dataList={state.customers}
                emptyListKey='customer-empty-list'
                makeItem={(data: ICustomerListData, index: number) => {
                    if (action && target) {
                        return (
                            <ListSelectRow
                                data={data}
                                index={index}
                                action={action}
                                target={target}
                                onClick={makeClientSelection(
                                    appDispatch,
                                    target,
                                    data,
                                )}
                            />
                        );
                    }
                    return (
                        <ListItem
                            data={data}
                            index={index}
                            urlPrefix='/customers'
                            iconNoPhoto={
                                <Suspense>
                                    <AnonymousSVG_ />
                                </Suspense>
                            }
                            onRemove={makeRemoveItem(dispatch, data)}
                        />
                    );
                }}
            />
            <Confirmation
                question={translate('question-remove', true)}
                showConfirm={Boolean(state.idRemoved && state.preConfirm)}
                onYes={onConfirm}
                onNo={onConfirmCancel}
                onClose={onConfirmCancel}
            />
        </>
    );
};

export * from './types';
