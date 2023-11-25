import { List as GenericList } from '@/Pages/App/Components/List';
import { ListItemButtonsPack } from '@/Pages/App/Components/ListItemButtonsPack';
import { ListItemLinked } from '@/Pages/App/Components/ListItemLinked';
import { ListItemTrueButton } from '@/Pages/App/Components/ListItemTrueButton';
import { Pagination } from '@/Pages/App/Components/Pagination';
import { Tools, ToolsType } from '@/Pages/App/Components/Tools';
import {
    makeChangeGroup,
    makeChangePage,
    makeToolChange,
} from '@/Pages/App/Screens/RegisterRequest/List/libraries/handlers';
import {
    useRegisterRequestsCall,
    useRegisterRequestsReducer,
    useRegisterRequestsResponse,
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
                                        show
                                    />
                                </ListItemButtonsPack>
                            }
                        />
                    );
                }}
            />
        </>
    );
};

export { List as RegisterRequests };
