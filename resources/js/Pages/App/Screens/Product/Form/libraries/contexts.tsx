import { ProductDispatchType } from '@/Pages/App/Screens/Product/Form/libraries/types';
import { IProduct } from '@/Pages/App/Screens/Product/types';
import { ErrorsSetterType, ErrorsType } from '@/Pages/App/Screens/types';
import { ReactNode, createContext } from 'react';

type ContextPackProps = {
    children: ReactNode;
    errors: ErrorsType;
    setErrors: ErrorsSetterType;
    product: IProduct;
    dispatch: ProductDispatchType;
};

export const ProductErrorsContext = createContext<
    ContextPackProps['errors'] | null
>(null);
export const ProductErrorsSetterContext = createContext<
    ContextPackProps['setErrors'] | null
>(null);
export const ProductContext = createContext<ContextPackProps['product'] | null>(
    null,
);
export const ProductDispatchContext = createContext<ProductDispatchType>(null);

export const ContextPack = ({
    errors,
    setErrors,
    product,
    dispatch,
    children,
}: ContextPackProps) => {
    return (
        <ProductErrorsContext.Provider value={errors}>
            <ProductErrorsSetterContext.Provider value={setErrors}>
                <ProductContext.Provider value={product}>
                    <ProductDispatchContext.Provider value={dispatch}>
                        {children}
                    </ProductDispatchContext.Provider>
                </ProductContext.Provider>
            </ProductErrorsSetterContext.Provider>
        </ProductErrorsContext.Provider>
    );
};
