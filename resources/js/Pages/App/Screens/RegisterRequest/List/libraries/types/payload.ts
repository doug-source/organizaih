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
    type ChangeEmail = {
        type: RegisterRequestsReducerEnum.CHANGE_EMAIL;
        payload: string;
    };

    type Delete = {
        type: RegisterRequestsReducerEnum.APPROVAL;
    };
    type Undefined = {
        type:
            | RegisterRequestsReducerEnum.CLEAR_APPROVAL
            | RegisterRequestsReducerEnum.CANCEL_APPROVAL;
    };
    type PrepareApproval<T> = {
        type: RegisterRequestsReducerEnum.PREPARE_APPROVAL;
        payload: T;
    };

    export type Skeleton<T> =
        | Init
        | ChangePage
        | Numeric
        | ChangeEmail
        | Error
        | Refresh
        | Delete
        | Undefined
        | PrepareApproval<T>
        | DeletionPayload.Skeleton<T>;
}
