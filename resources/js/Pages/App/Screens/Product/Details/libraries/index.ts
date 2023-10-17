import { useTranslate } from '@/libraries';
import { IProduct } from '@/Pages/App/Screens/Product/types';

export const makeCategoryName = (
    product: IProduct,
    translate: ReturnType<typeof useTranslate>,
) => {
    const {
        category: { id, name },
    } = product;
    if (id === 1) {
        return translate(name);
    }
    return name;
};

export * from './hooks';
