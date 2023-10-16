import { CustomerReducerEnum } from '@/Pages/App/Screens/Customer/Form/libraries/enums';
import { IAddress, ICustomer } from '@/Pages/App/Screens/Customer/Form/types';
import { Dispatch } from 'react';

export namespace CustomerPayload {
    type changeCustomerPayloads =
        | { field: 'id'; value: ICustomer['id'] }
        | { field: 'name'; value: ICustomer['name'] }
        | { field: 'photo'; value: ICustomer['photo'] }
        | { field: 'sex'; value: ICustomer['sex'] }
        | { field: 'phone_1'; value: ICustomer['phone_1'] }
        | { field: 'phone_2'; value: ICustomer['phone_2'] }
        | { field: 'birthday'; value: ICustomer['birthday'] }
        | { field: 'raw_sex'; value: ICustomer['raw_sex'] }
        | {
              field: 'birthday_formatted';
              value: ICustomer['birthday_formatted'];
          }
        | { field: 'raw_phone1'; value: ICustomer['raw_phone1'] }
        | { field: 'raw_phone2'; value: ICustomer['raw_phone2'] }
        | { field: 'updated_at'; value: ICustomer['updated_at'] }
        | { field: 'created_at'; value: ICustomer['created_at'] }
        | { field: 'address_id'; value: ICustomer['address_id'] }
        | { field: 'address'; value: ICustomer['address'] }
        | { field: 'photoChosen'; value: ICustomer['photoChosen'] };

    type ChangeCustomer = {
        type: CustomerReducerEnum.CHANGE_CUSTOMER;
        payload: changeCustomerPayloads;
    };

    type changeAddressPayloads =
        | { field: 'street'; value: IAddress['street'] }
        | { field: 'number'; value: IAddress['number'] }
        | { field: 'district'; value: IAddress['district'] }
        | { field: 'state'; value: IAddress['state'] }
        | { field: 'city'; value: IAddress['city'] };

    type ChangeAddress = {
        type: CustomerReducerEnum.CHANGE_CUSTOMER_ADDRESS;
        payload: changeAddressPayloads;
    };

    type ChangeCity = {
        type: CustomerReducerEnum.CHANGE_CUSTOMER_CITY;
        payload: number;
    };

    type ChangeState = {
        type: CustomerReducerEnum.CHANGE_CUSTOMER_STATE;
        payload: number;
    };

    type ChangeAll = {
        type: CustomerReducerEnum.CHANGE_CUSTOMER_ALL;
        payload: {
            [K in keyof ICustomer]: ICustomer[K];
        };
    };

    export type Skeleton =
        | ChangeCustomer
        | ChangeAddress
        | ChangeCity
        | ChangeState
        | ChangeAll;
}

export type CustomerDispatchType = Dispatch<CustomerPayload.Skeleton> | null;
