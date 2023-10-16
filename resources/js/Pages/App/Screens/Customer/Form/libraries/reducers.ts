import { CustomerReducerEnum } from '@/Pages/App/Screens/Customer/Form/libraries/enums';
import {
    CustomerPayload,
    CustomerReducerState,
} from '@/Pages/App/Screens/Customer/Form/libraries/types';

export const customerReducer = (
    state: CustomerReducerState,
    action: CustomerPayload.Skeleton,
): CustomerReducerState => {
    switch (action.type) {
        case CustomerReducerEnum.CHANGE_CUSTOMER: {
            return {
                ...state,
                customer: {
                    ...state.customer,
                    [action.payload.field]: action.payload.value,
                },
            };
        }
        case CustomerReducerEnum.CHANGE_CUSTOMER_ADDRESS:
            return {
                ...state,
                customer: {
                    ...state.customer,
                    address: {
                        ...state.customer.address,
                        [action.payload.field]: action.payload.value,
                    },
                },
            };
        case CustomerReducerEnum.CHANGE_CUSTOMER_CITY:
            return {
                ...state,
                customer: {
                    ...state.customer,
                    address: {
                        ...state.customer.address,
                        city: {
                            ...state.customer.address.city,
                            id: action.payload,
                        },
                    },
                },
            };
        case CustomerReducerEnum.CHANGE_CUSTOMER_STATE:
            return {
                ...state,
                customer: {
                    ...state.customer,
                    address: {
                        ...state.customer.address,
                        state: {
                            ...state.customer.address.state,
                            id: action.payload,
                        },
                    },
                },
            };
        case CustomerReducerEnum.CHANGE_CUSTOMER_ALL: {
            const birthday = action.payload.birthday_formatted;
            return {
                ...state,
                customer: {
                    ...state.customer,
                    id: action.payload.id,
                    name: action.payload.name,
                    photo: action.payload.photo || '',
                    sex: action.payload.raw_sex,
                    phone_1: action.payload.raw_phone1 || '',
                    phone_2: action.payload.raw_phone2 || '',
                    birthday:
                        birthday === '--' ? null : action.payload.birthday,
                    address: {
                        ...state.customer.address,
                        street: action.payload.address.street,
                        number: action.payload.address.number,
                        district: action.payload.address.district,
                        state: {
                            ...state.customer.address.state,
                            id: action.payload.address.state.id,
                        },
                        city: {
                            ...state.customer.address.city,
                            id: action.payload.address.city.id,
                        },
                    },
                },
            };
        }
        default: {
            const actionInvalid: never = action;
            throw new Error('Type invalid.', { cause: actionInvalid });
        }
    }
};
