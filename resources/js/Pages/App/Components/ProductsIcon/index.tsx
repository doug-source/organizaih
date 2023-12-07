import { ProductsIcon_ } from '@/Pages/App/Components/ProductsIcon/styling';
import { HTMLAttributes, Suspense } from 'react';

type ProductsIconProps = HTMLAttributes<SVGElement>;

export const ProductsIcon = (props: ProductsIconProps) => (
    <Suspense>
        <ProductsIcon_ {...props} />
    </Suspense>
);
