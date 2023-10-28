import { DataReducerEnum } from '@/Pages/App/libraries/enums';
import { DataPayload, DataReducerState } from '@/Pages/App/libraries/types';
import { makeEmptySelections } from '@/Pages/App/settings';
import { Theme } from '@/settings';

export const dataReducer = (
    state: DataReducerState,
    action: DataPayload.Skeleton,
): DataReducerState => {
    switch (action.type) {
        case DataReducerEnum.TITLE: {
            return {
                ...state,
                title: action.payload,
            };
        }
        case DataReducerEnum.ERROR: {
            return {
                ...state,
                error: action.payload,
            };
        }
        case DataReducerEnum.LOADING: {
            return {
                ...state,
                loading: action.payload,
            };
        }
        case DataReducerEnum.SELECTION_TARGET:
            return {
                ...state,
                selections: {
                    ...state.selections,
                    target: action.payload,
                },
            };
        case DataReducerEnum.SELECTION_ACTION:
            return {
                ...state,
                selections: {
                    ...state.selections,
                    action: action.payload,
                },
            };
        case DataReducerEnum.SELECTION_CLEAR: {
            const emptySelections = makeEmptySelections();
            return {
                ...state,
                selections: {
                    ...emptySelections,
                    sales: {
                        ...emptySelections.sales,
                        salesToSave: [],
                    },
                    inventories: {
                        ...emptySelections.inventories,
                        inventoriesToSave: [],
                    },
                    products: {
                        ...emptySelections.products,
                    },
                },
            };
        }

        case DataReducerEnum.SELECTION_CUSTOMER: {
            const keyList = action.payload.key;
            return {
                ...state,
                selections: {
                    ...state.selections,
                    [keyList]: {
                        ...state.selections[keyList],
                        customer: action.payload.value,
                    },
                },
            };
        }
        case DataReducerEnum.SELECTION_PRODUCT: {
            const keyList = action.payload.key;
            return {
                ...state,
                selections: {
                    ...state.selections,
                    [keyList]: {
                        ...state.selections[keyList],
                        product: action.payload.value,
                    },
                },
            };
        }
        case DataReducerEnum.SELECTION_PRODUCT_CATEGORY: {
            const keyList = action.payload.key;
            return {
                ...state,
                selections: {
                    ...state.selections,
                    [keyList]: {
                        ...state.selections[keyList],
                        category: action.payload.value,
                    },
                },
            };
        }
        case DataReducerEnum.SELECTION_SALES_SAVED_ITEM_ADD_ALL: {
            return {
                ...state,
                selections: {
                    ...state.selections,
                    sales: {
                        ...state.selections.sales,
                        salesToSave: action.payload,
                    },
                },
            };
        }
        case DataReducerEnum.SELECTION_INVENTORIES_SAVED_ITEM_ADD_ALL: {
            return {
                ...state,
                selections: {
                    ...state.selections,
                    inventories: {
                        ...state.selections.inventories,
                        inventoriesToSave: action.payload,
                    },
                },
            };
        }
        // case DataReducerEnum.WINDOW_RESIZE: {
        //     return {
        //         ...state,
        //         windowWidth: action.payload.width,
        //         windowHeight: action.payload.height,
        //     };
        // }

        case DataReducerEnum.CHANGE_THEME: {
            let theme: DataReducerState['theme'] = Theme.light;
            if (state.theme.key === 'light') {
                theme = Theme.dark;
            }

            return { ...state, theme };
        }
        default: {
            const actionInvalid: never = action;
            throw new Error('Type invalid.', { cause: actionInvalid });
        }
    }
};
