import { AnonymousDetailsIcon } from '@/Pages/App/Components/AnonymousDetailsIcon';
import { DetailsContainer } from '@/Pages/App/Components/DetailsContainer';
import { ProfilePhotoOutput } from '@/Pages/App/Components/ProfilePhotoOutput';
import {
    useCustomerDetailsRequest,
    useCustomerDetailsResponse,
} from '@/Pages/App/Screens/Customer/Details/libraries';
import { DefineItemCustomer_ } from '@/Pages/App/Screens/Customer/Details/styling';
import { useInitPage } from '@/Pages/App/libraries/hooks';
import { useTranslate } from '@/libraries';
import { useParams } from 'react-router-dom';

const Details = () => {
    const translate = useTranslate();
    const { id } = useParams();
    const [store] = useCustomerDetailsRequest(Number(id));
    useInitPage('customer-show-title');

    const [customer, sex] = useCustomerDetailsResponse(store);

    if (store.error || !customer) {
        return null;
    }
    return (
        <DetailsContainer>
            <DefineItemCustomer_
                labelText={translate('name', true) + ':'}
                value={customer.name}
                $sex={sex}
            >
                <ProfilePhotoOutput
                    url={customer.photo}
                    iconNoPhoto={<AnonymousDetailsIcon />}
                />
            </DefineItemCustomer_>
            <DefineItemCustomer_
                labelText={translate('customer-fields-sex', true) + ':'}
                value={customer.sex}
                $sex={sex}
            />
            <DefineItemCustomer_
                labelText={translate('customer-fields-phone_1', true) + ':'}
                value={customer.phone_1 ?? ''}
                $sex={sex}
            />
            <DefineItemCustomer_
                labelText={translate('customer-fields-phone_2', true) + ':'}
                value={customer.phone_2 ?? ''}
                $sex={sex}
            />
            <DefineItemCustomer_
                labelText={translate('customer-fields-birthday', true) + ':'}
                value={customer.birthday_formatted}
                $sex={sex}
            />
            <DefineItemCustomer_
                labelText={translate('customer-fields-state', true) + ':'}
                value={customer.address.state.name}
                $sex={sex}
            />
            <DefineItemCustomer_
                labelText={translate('customer-fields-city', true) + ':'}
                value={customer.address.city.name}
                $sex={sex}
            />
            <DefineItemCustomer_
                labelText={translate('customer-fields-street', true) + ':'}
                value={customer.address.street}
                $sex={sex}
            />
            <DefineItemCustomer_
                labelText={translate('customer-fields-number', true) + ':'}
                value={String(customer.address.number)}
                $sex={sex}
            />
            <DefineItemCustomer_
                labelText={translate('customer-fields-district', true) + ':'}
                value={customer.address.district}
                $sex={sex}
            />
            <DefineItemCustomer_
                labelText={translate('registered-in', true) + ':'}
                value={customer.created_at}
                $sex={sex}
            />
        </DetailsContainer>
    );
};

export { Details as CustomerDetails };
