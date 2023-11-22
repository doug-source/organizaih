import { UsersReducerEnum } from '@/Pages/App/Screens/User/List/libraries/enums';
import { useUsersReducer } from '@/Pages/App/Screens/User/List/libraries/hooks';

type DispatchFn = ReturnType<typeof useUsersReducer>[1];

export const makeToolChange = (dispatch: DispatchFn) => {
    return (name: string) => {
        return dispatch({
            type: UsersReducerEnum.NAME,
            payload: name,
        });
    };
};

export const makeChangePage = (dispatch: DispatchFn) => {
    return (payload: number) => {
        return dispatch({
            type: UsersReducerEnum.CHANGE_PAGE,
            payload,
        });
    };
};

export const makeChangeGroup = (dispatch: DispatchFn) => {
    return (payload: number) => {
        return dispatch({
            type: UsersReducerEnum.CHANGE_GROUP,
            payload,
        });
    };
};
