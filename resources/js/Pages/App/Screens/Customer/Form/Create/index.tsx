import { useInitPage } from '@/Pages/App/libraries';
import { Base } from '@/Pages/App/Screens/Customer/Form/Base';

export const Create = () => {
    useInitPage('customer-create-title', false);

    return (
        <Base
            action='/customers'
            preSelection={true}
        />
    );
};
