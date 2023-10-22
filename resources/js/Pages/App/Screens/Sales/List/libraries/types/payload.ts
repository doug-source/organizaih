import { SalesReducerEnum } from '@/Pages/App/Screens/Sales/List/libraries/enums';
import { ISaleResponse } from '@/Pages/App/Screens/Sales/types';
import { ErrorFromRequest } from '@/Pages/App/libraries/hooks/Api';
import { DeletionPayload } from '@/Pages/App/libraries/types/payload/deletion';

export namespace SalesPayload {
    type Init = {
        type: SalesReducerEnum.INIT;
        payload: ISaleResponse[];
    };

    type StringField = {
        type:
            | SalesReducerEnum.INCLUDE_PRODUCT_NAME
            | SalesReducerEnum.INCLUDE_CUSTOMER_NAME;
        payload: string;
    };

    type DateField = {
        type:
            | SalesReducerEnum.INCLUDE_DT_START
            | SalesReducerEnum.INCLUDE_DT_END;
        payload: Date;
    };

    type Numeric = {
        type:
            | SalesReducerEnum.CHANGE_PAGE
            | SalesReducerEnum.CHANGE_GROUP
            | SalesReducerEnum.CHANGE_LAST
            | SalesReducerEnum.CHANGE_QTY;
        payload: number;
    };
    type Error = {
        type: SalesReducerEnum.ERROR;
        payload: ErrorFromRequest & {
            customMessage: string;
        };
    };
    type Refresh = {
        type: SalesReducerEnum.REFRESH;
    };

    export type Skeleton<T> =
        | Init
        | StringField
        | DateField
        | Numeric
        | Error
        | Refresh
        | DeletionPayload.Skeleton<T>;
}
