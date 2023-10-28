import { SaleBase } from '@/Pages/App/Screens/Sales/Form/Base';
import { useCreateInitSelection } from '@/Pages/App/Screens/Sales/Form/Create/libraries/hooks';
import { SaleFormInitProps } from '@/Pages/App/Screens/Sales/Form/libraries';
import { useInitPage } from '@/Pages/App/libraries/hooks';

type CreateProps = {
    onInit: SaleFormInitProps;
};

const Create = ({ onInit }: CreateProps) => {
    useInitPage('sale-create-title', false);
    useCreateInitSelection(onInit);

    return <SaleBase />;
};

export { Create as SaleCreate };
