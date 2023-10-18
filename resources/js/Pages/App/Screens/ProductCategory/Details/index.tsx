import { DefineItem } from '@/Pages/App/Components/DefineItem';
import {
    useCategoryProductRequest,
    useCategoryProductResponse,
} from '@/Pages/App/Screens/ProductCategory/Details/libraries/hooks';
import { DetailsContainer_ } from '@/Pages/App/Screens/ProductCategory/Details/styling';
import { useInitPage } from '@/Pages/App/libraries';
import { useTranslate } from '@/libraries';

const Details = () => {
    const translate = useTranslate();
    useInitPage('category-show-title');

    const [store] = useCategoryProductRequest();
    const [productCategory] = useCategoryProductResponse(store);

    if (store.error || !productCategory) {
        return null;
    }
    return (
        <DetailsContainer_>
            <DefineItem
                labelText={translate('name', true) + ':'}
                valueText={productCategory.name}
                childrenSimilar
            />
            <DefineItem
                labelText={translate('description', true) + ':'}
                valueText={productCategory.description || '--'}
            />
            <DefineItem
                labelText={translate('obs', true) + ':'}
                valueText={productCategory.obs || '--'}
            />
            <DefineItem
                labelText={translate('registered-in', true) + ':'}
                valueText={productCategory.created_at}
            />
        </DetailsContainer_>
    );
};

export { Details as ProductCategoryDetails };
