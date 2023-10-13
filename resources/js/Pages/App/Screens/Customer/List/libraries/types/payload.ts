import { CustomersReducerEnum } from '@/Pages/App/Screens/Customer/List/libraries/enums';
import { ICustomerListData } from '@/Pages/App/Screens/Customer/List/types';
import { DeletionPayload, ErrorFromRequest } from '@/Pages/App/libraries';

export namespace CustomersPayload {
    type Init = {
        type: CustomersReducerEnum.INIT;
        payload: Array<ICustomerListData>;
    };
    type ChangePage = {
        type: CustomersReducerEnum.CHANGE_PAGE;
        payload: number;
    };
    type Numeric = {
        type:
            | CustomersReducerEnum.CHANGE_GROUP
            | CustomersReducerEnum.CHANGE_LAST
            | CustomersReducerEnum.CHANGE_QTY;
        payload: number;
    };
    type Error = {
        type: CustomersReducerEnum.ERROR;
        payload: ErrorFromRequest & { customMessage: string };
    };
    type Refresh = {
        type: CustomersReducerEnum.REFRESH;
    };
    type Search = {
        type: CustomersReducerEnum.SEARCH;
        payload: { search: string };
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
