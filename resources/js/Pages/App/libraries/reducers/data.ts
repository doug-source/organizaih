import { DataReducerEnum } from '@/Pages/App/libraries/enums';
import { DataPayload, DataReducerState } from '@/Pages/App/libraries/types';
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
        case DataReducerEnum.LOADING:
            return {
                ...state,
                loading: action.payload,
            };

        case DataReducerEnum.CHANGE_THEME: {
            let theme: DataReducerState['theme'] = Theme.light;
            if (state.theme.key === 'light') {
                theme = Theme.dark;
            }

            return { ...state, theme };
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
        default: {
            const actionInvalid: never = action;
            throw new Error('Type invalid.', { cause: actionInvalid });
        }
    }
};
