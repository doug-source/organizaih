import { ProductCategoryReducerEnum } from '@/Pages/App/Screens/ProductCategory/Form/Base/libraries/enums';
import { ProductCategoryPayload } from '@/Pages/App/Screens/ProductCategory/Form/Base/libraries/types/payload';
import { ProductCategoryReducerState } from '@/Pages/App/Screens/ProductCategory/Form/Base/libraries/types/state';

export const productCategoryReducer = (
    state: ProductCategoryReducerState,
    action: ProductCategoryPayload.Skeleton,
): ProductCategoryReducerState => {
    switch (action.type) {
        case ProductCategoryReducerEnum.CHANGE_PRODUCT_CATEGORY:
            return {
                ...state,
                productCategory: {
                    ...state.productCategory!,
                    [action.payload.field]: action.payload.value,
                },
            };
        case ProductCategoryReducerEnum.CHANGE_PRODUCT_CATEGORY_ALL:
            return {
                ...state,
                productCategory: {
                    ...state.productCategory,
                    id: action.payload.id,
                    name: action.payload.name,
                    description: action.payload.description,
                    obs: action.payload.obs,
                },
            };
        default: {
            const actionInvalid: never = action;
            throw new Error('Type invalid.', { cause: actionInvalid });
        }
    }
};
