import { ICustomer } from '@/Pages/App/Screens/Customer/types';
import { formatRequestDate } from '@/libraries';
import { RefObject } from 'react';

export * from './handlers';
export * from './hooks';

export const buildFormData = (
    customerInput: ICustomer,
    inputFile: RefObject<HTMLInputElement>,
) => {
    const formData = new FormData();
    const {
        photoChosen,
        // eslint-disable-next-line no-unused-vars
        photo,
        ...customer
    } = customerInput;
    const file: File | undefined = (inputFile.current?.files || [])[0];
    const birthday = formatRequestDate(customer.birthday);

    formData.append('name', customer.name);
    formData.append('sex', customer.sex);
    formData.append('phone_1', customer.phone_1 || '');
    formData.append('phone_2', customer.phone_2 || '');
    formData.append('birthday', birthday);
    formData.append('state', String(customer.address.state.id));
    formData.append('city', String(customer.address.city.id));
    formData.append('street', customer.address.street);
    formData.append('number', String(customer.address.number));
    formData.append('district', customer.address.district);
    if (photoChosen && file) {
        formData.append('photo', file);
    }
    if (customer.id) {
        // edit
        formData.append('_method', 'PUT');
    }
    // otherwise create

    return formData;
};
