import {
    CategoriesBtnText_,
    CategorySVG_,
} from '@/Pages/App/Components/CategoryBtn/styling';
import { LinkedButton } from '@/Pages/App/Components/LinkedButton';
import { useTranslate } from '@/libraries';
import { Suspense } from 'react';

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
            <Suspense>
                <CategorySVG_ />
            </Suspense>
            <CategoriesBtnText_>
                {translate('list-categories', true)}
            </CategoriesBtnText_>
        </LinkedButton>
    );
};
