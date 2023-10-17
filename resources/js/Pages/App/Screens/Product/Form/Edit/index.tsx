import { ProductFormBase } from '@/Pages/App/Screens/Product/Form/Base';
import {
    useProductRequest,
    useProductResponse,
} from '@/Pages/App/Screens/Product/Form/Edit/libraries/hooks';
import { IProduct } from '@/Pages/App/Screens/Product/types';
import { useInitPage } from '@/Pages/App/libraries';

type EditProps = {
    productID: number;
    onInit: (payload: IProduct) => void;
};

const Edit = ({ productID, onInit = () => {} }: EditProps) => {
    useInitPage('product-edit-title');

    const [productInfo] = useProductRequest(productID);
    useProductResponse(productID, productInfo, onInit);

    if (productInfo.error) {
        return null;
    }
    return <ProductFormBase method='PUT' />;
};

export { Edit as ProductFormEdit };
