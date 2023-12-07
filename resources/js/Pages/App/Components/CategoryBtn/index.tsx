import {
    CategoriesBtnText_,
    ProductCategoryIcon_,
} from '@/Pages/App/Components/CategoryBtn/styling';
import { LinkedButton } from '@/Pages/App/Components/LinkedButton';
import { useTranslate } from '@/libraries';

type CategoriesBtnProps = {
    show?: boolean;
};

export const CategoryBtn = ({ show = true }: CategoriesBtnProps) => {
    const translate = useTranslate();
    if (!show) {
        return null;
    }
    return (
        <LinkedButton to='/product-categories'>
            <ProductCategoryIcon_ />
            <CategoriesBtnText_>
                {translate('list-categories', true)}
            </CategoriesBtnText_>
        </LinkedButton>
    );
};
