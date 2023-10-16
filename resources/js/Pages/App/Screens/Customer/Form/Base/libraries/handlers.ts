import { DatePicker, ProfilePhoto, RadioToggle } from '@/Pages/App/Components';
import { CustomerReducerEnum } from '@/Pages/App/Screens/Customer/Form/libraries/enums';
import { useCustomerDispatch } from '@/Pages/App/Screens/Customer/Form/libraries/hooks';
import {
    ChangeEventHandler,
    ComponentPropsWithRef,
    ComponentPropsWithoutRef,
} from 'react';

export const makeNameChange = (
    dispatch: ReturnType<typeof useCustomerDispatch>,
): ChangeEventHandler<HTMLInputElement> => {
    return (evt) => {
        dispatch({
            type: CustomerReducerEnum.CHANGE_CUSTOMER,
            payload: { field: 'name', value: evt.target.value },
        });
    };
};

type OnPhotoChangeValue = Parameters<
    Required<ComponentPropsWithRef<typeof ProfilePhoto>>['onChange']
>[0];

export const makePhotoChange = (
    dispatch: ReturnType<typeof useCustomerDispatch>,
) => {
    return (value: OnPhotoChangeValue) => {
        dispatch({
            type: CustomerReducerEnum.CHANGE_CUSTOMER,
            payload: { field: 'photoChosen', value },
        });
    };
};

type OnRadioToggleChangeValue = Parameters<
    Required<ComponentPropsWithoutRef<typeof RadioToggle>>['onChange']
>[0];

export const makeSexChange = (
    dispatch: ReturnType<typeof useCustomerDispatch>,
) => {
    return (value: OnRadioToggleChangeValue) => {
        dispatch({
            type: CustomerReducerEnum.CHANGE_CUSTOMER,
            payload: { field: 'sex', value },
        });
    };
};

export const makeFirstPhoneChange = (
    dispatch: ReturnType<typeof useCustomerDispatch>,
): ChangeEventHandler<HTMLInputElement> => {
    return (evt) => {
        dispatch({
            type: CustomerReducerEnum.CHANGE_CUSTOMER,
            payload: {
                field: 'phone_1',
                value: evt.target.value,
            },
        });
    };
};

export const makeSecondPhoneChange = (
    dispatch: ReturnType<typeof useCustomerDispatch>,
): ChangeEventHandler<HTMLInputElement> => {
    return (evt) => {
        dispatch({
            type: CustomerReducerEnum.CHANGE_CUSTOMER,
            payload: {
                field: 'phone_2',
                value: evt.target.value,
            },
        });
    };
};

type OnDatePickerChangeValue = Parameters<
    Required<ComponentPropsWithoutRef<typeof DatePicker>>['onDateChanged']
>[0];

export const makeDatePickerChange = (
    dispatch: ReturnType<typeof useCustomerDispatch>,
) => {
    return (date: OnDatePickerChangeValue) => {
        dispatch({
            type: CustomerReducerEnum.CHANGE_CUSTOMER,
            payload: {
                field: 'birthday',
                value: date,
            },
        });
    };
};

export const makeStreetChange = (
    dispatch: ReturnType<typeof useCustomerDispatch>,
): ChangeEventHandler<HTMLInputElement> => {
    return (evt) => {
        dispatch({
            type: CustomerReducerEnum.CHANGE_CUSTOMER_ADDRESS,
            payload: {
                field: 'street',
                value: evt.target.value,
            },
        });
    };
};

export const makeNumberChange = (
    dispatch: ReturnType<typeof useCustomerDispatch>,
): ChangeEventHandler<HTMLInputElement> => {
    return (evt) => {
        dispatch({
            type: CustomerReducerEnum.CHANGE_CUSTOMER_ADDRESS,
            payload: {
                field: 'number',
                value: Number(evt.target.value),
            },
        });
    };
};

export const makeDistrictChange = (
    dispatch: ReturnType<typeof useCustomerDispatch>,
): ChangeEventHandler<HTMLInputElement> => {
    return (evt) => {
        dispatch({
            type: CustomerReducerEnum.CHANGE_CUSTOMER_ADDRESS,
            payload: {
                field: 'district',
                value: evt.target.value,
            },
        });
    };
};
