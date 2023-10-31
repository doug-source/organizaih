import { useTitleBuilt } from '@/Pages/App/Components/ProductsSales/hooks';
import { Types } from '@/Pages/App/Components/ProductsSales/types';
import { QtyBars } from '@/Pages/App/Components/QtyBars';
import { useTranslate } from '@/libraries/hooks';
import { endpoints } from '@/settings';

export const GraphProductsSales = () => {
    const translate = useTranslate();
    return (
        <QtyBars<Types.ProductSoldItem>
            label={translate('menu-products', true)}
            title={useTitleBuilt()}
            preQtyEndpoint={endpoints.sale.productQty}
            makeQtyEndpoint={endpoints.sale.productsSold}
            xParser={(d) => d.name}
            yParser={(d) => d.qty}
        />
    );
};
