import { UsersReducerEnum } from '@/Pages/App/Screens/User/List/libraries/enums';
import { IUserListData } from '@/Pages/App/Screens/User/List/types';
import { DeletionPayload, ErrorFromRequest } from '@/Pages/App/libraries';

export namespace UsersPayload {
    type Init = {
        type: UsersReducerEnum.INIT;
        payload: Array<IUserListData>;
    };
    type ChangePage = {
        type: UsersReducerEnum.CHANGE_PAGE;
        payload: number;
    };
    type Numeric = {
        type:
            | UsersReducerEnum.CHANGE_GROUP
            | UsersReducerEnum.CHANGE_LAST
            | UsersReducerEnum.CHANGE_QTY;
        payload: number;
    };
    type Error = {
        type: UsersReducerEnum.ERROR;
        payload: ErrorFromRequest & { customMessage: string };
    };
    type Refresh = {
        type: UsersReducerEnum.REFRESH;
    };
    type Search = {
        type: UsersReducerEnum.NAME | UsersReducerEnum.EMAIL;
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
