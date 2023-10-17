import { Create } from '@/Pages/App/Screens/Customer/Form/Create';
import { Edit } from '@/Pages/App/Screens/Customer/Form/Edit';
import {
    ContextPack,
    useCustomerReducer,
    useEditInit,
} from '@/Pages/App/Screens/Customer/Form/libraries';
import { ErrorsType } from '@/Pages/App/Screens/types';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const Form = () => {
    const [errors, setErrors] = useState<ErrorsType>({});

    const [data, dispatch] = useCustomerReducer();

    const { id: customerID } = useParams();
    const onInit = useEditInit(dispatch);

    if (customerID) {
        return (
            <ContextPack
                errors={errors}
                setErrors={setErrors}
                data={data}
                dispatch={dispatch}
            >
                <Edit
                    customerID={Number(customerID)}
                    onInit={onInit}
                />
            </ContextPack>
        );
    }

    return (
        <ContextPack
            errors={errors}
            setErrors={setErrors}
            data={data}
            dispatch={dispatch}
        >
            <Create />
        </ContextPack>
    );
};

export * from './Base';
export * from './Create';
export * from './Edit';
export { Form as CustomerForm };
