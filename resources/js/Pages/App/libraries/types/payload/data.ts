import { ICustomerListData } from '@/Pages/App/Screens/Customer/List/types';
import { DataReducerEnum } from '@/Pages/App/libraries/enums';
import {
    DataReducerState,
    customerTargets,
} from '@/Pages/App/libraries/types/state';

export namespace DataPayload {
    type Title = {
        type: DataReducerEnum.TITLE;
        payload: DataReducerState['title'];
    };
    type Error = {
        type: DataReducerEnum.ERROR;
        payload: DataReducerState['error'];
    };
    type Loading = {
        type: DataReducerEnum.LOADING;
        payload: DataReducerState['loading'];
    };
    type ChangeTheme = {
        type: DataReducerEnum.CHANGE_THEME;
    };
    type SelectionCustomer = {
        type: DataReducerEnum.SELECTION_CUSTOMER;
        payload: {
            key: (typeof customerTargets)[number];
            value: ICustomerListData | null;
        };
    };
    export type Skeleton =
        | Title
        | Error
        | Loading
        | ChangeTheme
        | SelectionCustomer;
}
