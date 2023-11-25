import { RegisterRequestsReducerEnum } from '@/Pages/App/Screens/RegisterRequest/List/libraries/enums';
import { useRegisterRequestsReducer } from '@/Pages/App/Screens/RegisterRequest/List/libraries/hooks';

type DispatchFn = ReturnType<typeof useRegisterRequestsReducer>[1];

export const makeToolChange = (dispatch: DispatchFn) => {
    return (email: string) => {
        return dispatch({
            type: RegisterRequestsReducerEnum.CHANGE_EMAIL,
            payload: email,
        });
    };
};

export const makeChangePage = (dispatch: DispatchFn) => {
    return (payload: number) => {
        return dispatch({
            type: RegisterRequestsReducerEnum.CHANGE_PAGE,
            payload,
        });
    };
};

export const makeChangeGroup = (dispatch: DispatchFn) => {
    return (payload: number) => {
        return dispatch({
            type: RegisterRequestsReducerEnum.CHANGE_GROUP,
            payload,
        });
    };
};
