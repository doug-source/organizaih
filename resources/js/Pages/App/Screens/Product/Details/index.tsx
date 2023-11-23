import { ProfilePhotoOutput } from '@/Pages/App/Components/ProfilePhotoOutput';
import { makeCategoryName } from '@/Pages/App/Screens/Product/Details/libraries';
import {
    useProductRequest,
    useProductResponse,
} from '@/Pages/App/Screens/Product/Details/libraries/hooks';
import {
    AnonymousPhoto_,
    DefineItemProduct_,
    DetailsContainer_,
} from '@/Pages/App/Screens/Product/Details/styling';
import { useInitPage } from '@/Pages/App/libraries';
import { useTranslate } from '@/libraries';

const Details = () => {
    const translate = useTranslate();
    useInitPage('product-show-title');

    const [store] = useProductRequest();
    const [product] = useProductResponse(store);

    if (!product || store.error) {
        return null;
    }
    return (
        <DetailsContainer_>
            <DefineItemProduct_
                labelText={translate('name', true) + ':'}
                value={product.name}
            >
                <ProfilePhotoOutput
                    url={product.photo}
                    iconNoPhoto={<AnonymousPhoto_ />}
                />
            </DefineItemProduct_>
            <DefineItemProduct_
                labelText={translate('description', true) + ':'}
                value={product.description || '--'}
            />
            <DefineItemProduct_
                labelText={translate('obs', true) + ':'}
                value={product.obs || '--'}
            />
            <DefineItemProduct_
                labelText={translate('category', true) + ':'}
                value={makeCategoryName(product, translate)}
            />
            <DefineItemProduct_
                labelText={translate('registered-in', true) + ':'}
                value={product.created_at}
            />
        </DetailsContainer_>
    );
};

export { Details as ProductDetails };
