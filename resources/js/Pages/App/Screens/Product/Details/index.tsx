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
                valueText={product.name}
            >
                <ProfilePhotoOutput
                    url={product.photo}
                    iconNoPhoto={<AnonymousPhoto_ />}
                />
            </DefineItemProduct_>
            <DefineItemProduct_
                labelText={translate('description', true) + ':'}
                valueText={product.description || '--'}
            />
            <DefineItemProduct_
                labelText={translate('obs', true) + ':'}
                valueText={product.obs || '--'}
            />
            <DefineItemProduct_
                labelText={translate('category', true) + ':'}
                valueText={makeCategoryName(product, translate)}
            />
            <DefineItemProduct_
                labelText={translate('registered-in', true) + ':'}
                valueText={product.created_at}
            />
        </DetailsContainer_>
    );
};

export { Details as ProductDetails };
