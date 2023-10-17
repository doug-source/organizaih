import { ProductReducerEnum } from '@/Pages/App/Screens/Product/Form/libraries/enums';
import {
    ProductPayload,
    ProductReducerState,
} from '@/Pages/App/Screens/Product/Form/libraries/types';

export const productReducer = (
    state: ProductReducerState,
    action: ProductPayload.Skeleton,
): ProductReducerState => {
    switch (action.type) {
        case ProductReducerEnum.CHANGE_PRODUCT:
            return {
                ...state,
                product: {
                    ...state.product,
                    [action.payload.field]: action.payload.value,
                },
            };
        case ProductReducerEnum.CHANGE_PRODUCT_CATEGORY:
            return {
                ...state,
                product: {
                    ...state.product,
                    category: {
                        ...state.product.category,
                        [action.payload.field]: action.payload.value,
                    },
                },
            };
        case ProductReducerEnum.CHANGE_PRODUCT_CATEGORY_ALL:
            return {
                ...state,
                product: {
                    ...state.product,
                    category: action.payload,
                },
            };

        case ProductReducerEnum.CHANGE_PRODUCT_ALL:
            return {
                ...state,
                product: {
                    ...state.product,
                    id: action.payload.id,
                    name: action.payload.name,
                    photo: action.payload.photo || '',
                    description: action.payload.description,
                    obs: action.payload.obs,
                    category: {
                        ...action.payload.category,
                    },
                },
            };
        default: {
            const actionInvalid: never = action;
            throw new Error('Type invalid', { cause: actionInvalid });
        }
    }
};
