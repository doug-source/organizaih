import { useTitleBuilt } from '@/Pages/App/Components/CustomersSales/hooks';
import { Types } from '@/Pages/App/Components/CustomersSales/types';
import { QtyBars } from '@/Pages/App/Components/QtyBars';
import { useTranslate } from '@/libraries/hooks';
import { endpoints } from '@/settings';

export const GraphCustomersSales = () => {
    const translate = useTranslate();
    return (
        <QtyBars<Types.CustomerBuyerItem>
            label={translate('menu-customer', true)}
            title={useTitleBuilt()}
            preQtyEndpoint={endpoints.sale.customerQty}
            makeQtyEndpoint={endpoints.sale.customersBuyer}
            xParser={(d) => d.name}
            yParser={(d) => d.qty}
        />
    );
};
