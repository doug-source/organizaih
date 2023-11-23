import { AnonymousListIcon } from '@/Pages/App/Components/AnonymousListIcon';
import { Confirmation } from '@/Pages/App/Components/Confirmation';
import { List as GenericList } from '@/Pages/App/Components/List';
import { ListItem } from '@/Pages/App/Components/ListItem';
import { ListSelectRow } from '@/Pages/App/Components/ListSelectRow';
import { NextButton } from '@/Pages/App/Components/NextButton';
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
    AllowSvg_,
    AllowTextContent_,
    Tools_,
} from '@/Pages/App/Screens/User/List/styling';
import { IUserListData } from '@/Pages/App/Screens/User/List/types';
import { useAppDispatch, useInitPage } from '@/Pages/App/libraries/hooks';
import { columnSizeDB, paginationSetting } from '@/Pages/App/settings';
import { useTranslate } from '@/libraries';
import { navigations } from '@/settings';
import { Suspense } from 'react';

const List = () => {
    const translate = useTranslate();
    const appDispatch = useAppDispatch();
    // const { target } = useParams() as { target: SelectionTargetKey };
    const target = undefined;

    // const selection = useSelections();
    // const { action } = selection;
    const action = undefined;

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
                    <NextButton
                        preIcon
                        link={navigations.user.requests}
                        icon={
                            <Suspense>
                                <AllowSvg_ />
                            </Suspense>
                        }
                    >
                        <AllowTextContent_>
                            {translate('requests', true)}
                        </AllowTextContent_>
                    </NextButton>
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
                    if (action && target) {
                        return (
                            <ListSelectRow
                                key={data.id}
                                data={data}
                                index={index}
                                action={action}
                                target={target}
                                image={image}
                                // onClick={makeClientSelection(
                                //     appDispatch,
                                //     target,
                                //     data,
                                // )}
                            />
                        );
                    }
                    return (
                        <ListItem
                            key={data.id}
                            contentLinked={data.name}
                            id={data.id}
                            urlLink={navigations.user.show(data.id)}
                            titleLink={data.name}
                            index={index}
                            innerColumns={image}
                            // onRemove={makeRemoveItem(dispatch, data)}
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
