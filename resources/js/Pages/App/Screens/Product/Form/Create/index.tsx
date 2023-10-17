import { ProductFormBase } from '@/Pages/App/Screens/Product/Form/Base';
import { useCreateInit } from '@/Pages/App/Screens/Product/Form/Create/libraries/hooks';
import { OnInitFn } from '@/Pages/App/Screens/Product/Form/libraries';
import { useInitPage } from '@/Pages/App/libraries';

type CreateProps = {
    onInit: OnInitFn;
};

const Create = ({ onInit = () => {} }: CreateProps) => {
    useInitPage('product-create-title');
    useCreateInit(onInit);

    return <ProductFormBase action='/products' />;
};

export { Create as ProductFormCreate };
