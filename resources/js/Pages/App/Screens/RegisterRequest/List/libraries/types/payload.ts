import { RegisterRequestsReducerEnum } from '@/Pages/App/Screens/RegisterRequest/List/libraries/enums';
import { IRegisterRequest } from '@/Pages/App/Screens/RegisterRequest/types';
import { DeletionPayload, ErrorFromRequest } from '@/Pages/App/libraries';

export namespace RegisterRequestsPayload {
    type Init = {
        type: RegisterRequestsReducerEnum.INIT;
        payload: Array<IRegisterRequest>;
    };
    type ChangePage = {
        type: RegisterRequestsReducerEnum.CHANGE_PAGE;
        payload: number;
    };
    type Numeric = {
        type:
            | RegisterRequestsReducerEnum.CHANGE_GROUP
            | RegisterRequestsReducerEnum.CHANGE_LAST
            | RegisterRequestsReducerEnum.CHANGE_QTY;
        payload: number;
    };
    type Error = {
        type: RegisterRequestsReducerEnum.ERROR;
        payload: ErrorFromRequest & { customMessage: string };
    };
    type Refresh = {
        type: RegisterRequestsReducerEnum.REFRESH;
    };
    type Search = {
        type: RegisterRequestsReducerEnum.CHANGE_EMAIL;
        payload: string;
    };

    export type Skeleton<T> =
        | Init
        | ChangePage
        | Numeric
        | Search
        | Error
        | Refresh
        | DeletionPayload.Skeleton<T>;
}
