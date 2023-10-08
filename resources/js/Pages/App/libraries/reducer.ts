import { Theme } from '@/settings';
import { DataReducerEnum } from './enum';
import { Payload } from './payload';
import { ReducerState } from './state';

export const dataReducer = (
    state: ReducerState,
    action: Payload.Skeleton,
): ReducerState => {
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
            let theme: ReducerState['theme'] = Theme.light;
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
