import { ProfilePhotoOutput } from '@/Pages/App/Components';
import {
    useCustomerDetailsRequest,
    useCustomerDetailsResponse,
} from '@/Pages/App/Screens/Customer/Details/libraries';
import {
    DefineItemCustomer_,
    DetailsContainer_,
} from '@/Pages/App/Screens/Customer/Details/styling';
import { useInitPage } from '@/Pages/App/libraries/hooks';
import { useTranslate } from '@/libraries';
import { useParams } from 'react-router-dom';

export const Details = () => {
    const translate = useTranslate();
    const { id } = useParams();
    const [store] = useCustomerDetailsRequest(Number(id));
    useInitPage('customer-show-title');

    const [customer, sex] = useCustomerDetailsResponse(store);

    if (store.error || !customer) {
        return null;
    }
    return (
        <DetailsContainer_>
            <DefineItemCustomer_
                labelText={translate('name', true) + ':'}
                valueText={customer.name}
                $sex={sex}
            >
                <ProfilePhotoOutput url={customer.photo} />
            </DefineItemCustomer_>
            <DefineItemCustomer_
                labelText={translate('customer-fields-sex', true) + ':'}
                valueText={customer.sex}
                $sex={sex}
            />
            <DefineItemCustomer_
                labelText={translate('customer-fields-phone_1', true) + ':'}
                valueText={customer.phone_1 ?? ''}
                $sex={sex}
            />
            <DefineItemCustomer_
                labelText={translate('customer-fields-phone_2', true) + ':'}
                valueText={customer.phone_2 ?? ''}
                $sex={sex}
            />
            <DefineItemCustomer_
                labelText={translate('customer-fields-birthday', true) + ':'}
                valueText={customer.birthday_formatted}
                $sex={sex}
            />
            <DefineItemCustomer_
                labelText={translate('customer-fields-state', true) + ':'}
                valueText={customer.address.state.name}
                $sex={sex}
            />
            <DefineItemCustomer_
                labelText={translate('customer-fields-city', true) + ':'}
                valueText={customer.address.city.name}
                $sex={sex}
            />
            <DefineItemCustomer_
                labelText={translate('customer-fields-street', true) + ':'}
                valueText={customer.address.street}
                $sex={sex}
            />
            <DefineItemCustomer_
                labelText={translate('customer-fields-number', true) + ':'}
                valueText={String(customer.address.number)}
                $sex={sex}
            />
            <DefineItemCustomer_
                labelText={translate('customer-fields-district', true) + ':'}
                valueText={customer.address.district}
                $sex={sex}
            />
            <DefineItemCustomer_
                labelText={translate('registered-in', true) + ':'}
                valueText={customer.created_at}
                $sex={sex}
            />
        </DetailsContainer_>
    );
};
