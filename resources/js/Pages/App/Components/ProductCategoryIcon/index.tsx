import { ProductCategorySVG } from '@/Pages/App/libraries/icons/asynchronous';
import { HTMLAttributes, Suspense } from 'react';

type ProductCategoryIconProps = HTMLAttributes<SVGElement>;

export const ProductCategoryIcon = (props: ProductCategoryIconProps) => (
    <Suspense>
        <ProductCategorySVG {...props} />
    </Suspense>
);
