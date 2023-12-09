import { AnonymousListIcon } from '@/Pages/App/Components/AnonymousListIcon';
import { Confirmation } from '@/Pages/App/Components/Confirmation';
import { List as GenericList } from '@/Pages/App/Components/List';
import { ListItemLinked } from '@/Pages/App/Components/ListItemLinked';
import { Pagination } from '@/Pages/App/Components/Pagination';
import { PhotoListItem } from '@/Pages/App/Components/PhotoListItem';
import { ToolsType } from '@/Pages/App/Components/Tools';
import {
    makeChangeGroup,
    makeChangePage,
    makeToolChange,
} from '@/Pages/App/Screens/User/List/libraries/handlers';
import {
    useConfirmationCancel,
    useConfirmationYes,
    useUserRemotion,
    useUserRequest,
    useUserResponse,
    useUsersReducer,
} from '@/Pages/App/Screens/User/List/libraries/hooks';
import {
    AllowIcon_,
    AllowTextContent_,
    NextButton_,
    Tools_,
} from '@/Pages/App/Screens/User/List/styling';
import { IUserListData } from '@/Pages/App/Screens/User/List/types';
import { AbilitiesEnum } from '@/Pages/App/libraries/enums';
import { useInitPage } from '@/Pages/App/libraries/hooks';
import {
    columnSizeDB,
    hasAbility,
    paginationSetting,
} from '@/Pages/App/settings';
import { useTranslate } from '@/libraries';
import { navigations } from '@/settings';

const hasRegisterRequestScreen = hasAbility(
    AbilitiesEnum.REGISTER_REQUEST_SCREEN,
);

const List = () => {
    const translate = useTranslate();
    useInitPage('user-index-title');
    const [state, dispatch] = useUsersReducer();
    const [store] = useUserRequest(
        state.endpoint,
        state.page,
        state.group,
        state.name,
        state.email,
    );
    useUserResponse(store.data, store.status, store.error, dispatch);
    const [doRemotion] = useUserRemotion(dispatch);
    const onConfirm = useConfirmationYes(dispatch, doRemotion, state.idRemoved);
    const onConfirmCancel = useConfirmationCancel(dispatch);
    if (store.error) {
        return null;
    }
    return (
        <>
            <Tools_
                placeholderKey='user-filter-placeholder'
                toolLabelKey='filter-label'
                toolType={ToolsType.REQUEST_NAME}
                maxLength={columnSizeDB.userName}
                onToolChange={makeToolChange(dispatch)}
                outerFilters={
                    hasRegisterRequestScreen && (
                        <NextButton_
                            preIcon
                            link={navigations.registerRequest.list}
                            icon={<AllowIcon_ />}
                        >
                            <AllowTextContent_>
                                {translate('requests', true)}
                            </AllowTextContent_>
                        </NextButton_>
                    )
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
                dataList={state.users}
                emptyListKey='user-empty-list'
                makeItem={(data: IUserListData, index: number) => {
                    const image = (
                        <PhotoListItem
                            iconNoPhoto={<AnonymousListIcon />}
                            photo={null}
                        />
                    );
                    return (
                        <ListItemLinked
                            key={data.id}
                            index={index}
                            urlLink={navigations.user.show(data.id)}
                            titleLink={data.name}
                            contentLink={data.name}
                            firstColumns={image}
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

export { List as UserList };
