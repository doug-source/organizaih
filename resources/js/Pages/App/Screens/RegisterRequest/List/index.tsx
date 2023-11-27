import { Confirmation } from '@/Pages/App/Components/Confirmation';
import { List as GenericList } from '@/Pages/App/Components/List';
import { ListItemButtonsPack } from '@/Pages/App/Components/ListItemButtonsPack';
import { ListItemLinked } from '@/Pages/App/Components/ListItemLinked';
import { ListItemRemoveButton } from '@/Pages/App/Components/ListItemRemoveButton';
import { ListItemTrueButton } from '@/Pages/App/Components/ListItemTrueButton';
import { Pagination } from '@/Pages/App/Components/Pagination';
import { Tools, ToolsType } from '@/Pages/App/Components/Tools';
import {
    makeApprovalItem,
    makeChangeGroup,
    makeChangePage,
    makeRemoveItem,
    makeToolChange,
} from '@/Pages/App/Screens/RegisterRequest/List/libraries/handlers';
import {
    useApprovalConfirmationCancel,
    useApprovalConfirmationYes,
    useRegisterRequestApproval,
    useRegisterRequestRemotion,
    useRegisterRequestsCall,
    useRegisterRequestsReducer,
    useRegisterRequestsResponse,
    useRemotionConfirmationYes,
    useRemoveConfirmationCancel,
} from '@/Pages/App/Screens/RegisterRequest/List/libraries/hooks';
import { IRegisterRequest } from '@/Pages/App/Screens/RegisterRequest/types';
import { useInitPage } from '@/Pages/App/libraries/hooks';
import { columnSizeDB, paginationSetting } from '@/Pages/App/settings';
import { useTranslate } from '@/libraries';
import { navigations } from '@/settings';

const List = () => {
    const [state, dispatch] = useRegisterRequestsReducer();
    useInitPage('register-requests');
    const [store] = useRegisterRequestsCall(
        state.endpoint,
        state.page,
        state.group,
        state.email,
    );
    useRegisterRequestsResponse(
        store.data,
        store.status,
        store.error,
        dispatch,
    );
    const translate = useTranslate();
    const [doRemotion] = useRegisterRequestRemotion(dispatch);
    const onRemoveConfirm = useRemotionConfirmationYes(
        dispatch,
        doRemotion,
        state.idRemoved,
    );
    const onRemoveConfirmCancel = useRemoveConfirmationCancel(dispatch);

    const [doApproval] = useRegisterRequestApproval(dispatch);
    const onApprovalConfirm = useApprovalConfirmationYes(
        dispatch,
        doApproval,
        state.idApproved,
    );
    const onApprovalConfirmCancel = useApprovalConfirmationCancel(dispatch);
    return (
        <>
            <Tools
                placeholderKey='request-email-filter-placeholder'
                toolLabelKey='filter-label'
                toolType={ToolsType.REQUEST_NAME}
                maxLength={columnSizeDB.userEmail}
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
            </Tools>
            <GenericList
                dataList={state.requests}
                emptyListKey='register-request-empty-list'
                makeItem={(data: IRegisterRequest, index: number) => {
                    return (
                        <ListItemLinked
                            key={data.id}
                            index={index}
                            urlLink={navigations.registerRequest.show(data.id)}
                            titleLink={data.email}
                            contentLink={data.email}
                            lastColumns={
                                <ListItemButtonsPack>
                                    <ListItemTrueButton
                                        title={translate(
                                            'register-request-allow',
                                            true,
                                        )}
                                        onClick={makeApprovalItem(
                                            dispatch,
                                            data,
                                        )}
                                        show
                                    />
                                    <ListItemRemoveButton
                                        show
                                        onClick={makeRemoveItem(dispatch, data)}
                                    />
                                </ListItemButtonsPack>
                            }
                        />
                    );
                }}
            />
            <Confirmation
                question={translate('question-remove', true)}
                showConfirm={Boolean(state.idRemoved && state.preConfirm)}
                onYes={onRemoveConfirm}
                onNo={onRemoveConfirmCancel}
                onClose={onRemoveConfirmCancel}
            />
            <Confirmation
                question={translate('question-approve', true)}
                showConfirm={Boolean(state.idApproved && state.preConfirm)}
                onYes={onApprovalConfirm}
                onNo={onApprovalConfirmCancel}
                onClose={onApprovalConfirmCancel}
            />
        </>
    );
};

export { List as RegisterRequests };
