import { Base } from '@/Pages/App/Screens/Customer/Form/Base';
import { useEditCustomerRequest } from '@/Pages/App/Screens/Customer/Form/Edit/libraries';
import { OnInitHandler } from '@/Pages/App/Screens/Customer/Form/libraries';
import { useInitPage } from '@/Pages/App/libraries';

type EditProps = {
    customerID: number;
    onInit?: OnInitHandler;
};

export const Edit = ({ customerID, onInit = (customer) => {} }: EditProps) => {
    useInitPage('customer-edit-title');

    const [customerInfoError] = useEditCustomerRequest(customerID, onInit);

    if (customerInfoError) {
        return null;
    }
    return (
        <Base
            action={`/customers/${customerID}`}
            method='PUT'
        />
    );
};
