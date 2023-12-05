import { SelfReducerEnum } from '@/Pages/App/Components/UserEditionPack/libraries/enums';
import {
    ErrorKeys,
    ErrorsBox,
} from '@/Pages/App/Components/UserEditionPack/libraries/types';
import { IUser } from '@/libraries/types';

export type SelfReducerState = {
    user: IUser;
    errors: ErrorsBox<ErrorKeys>;
};

namespace RegisterPayload {
    type ChangeName = {
        type: SelfReducerEnum.CHANGE_NAME;
        payload: SelfReducerState['user']['name'];
    };
    type ChangePhone = {
        type: SelfReducerEnum.CHANGE_PHONE;
        payload: SelfReducerState['user']['phone'];
    };
    type ChangePhotoChosen = {
        type: SelfReducerEnum.CHANGE_PHOTO_CHOSEN;
        payload: SelfReducerState['user']['photoChosen'];
    };
    type TriggerErrors = {
        type: SelfReducerEnum.TRIGGER_ERRORS;
        payload: SelfReducerState['errors'];
    };

    export type Skeleton =
        | ChangeName
        | ChangePhone
        | ChangePhotoChosen
        | TriggerErrors;
}

export const selfReducer = (
    state: SelfReducerState,
    action: RegisterPayload.Skeleton,
): SelfReducerState => {
    switch (action.type) {
        case SelfReducerEnum.CHANGE_NAME: {
            return {
                ...state,
                user: {
                    ...state.user,
                    name: action.payload,
                },
            };
        }
        case SelfReducerEnum.CHANGE_PHONE: {
            return {
                ...state,
                user: {
                    ...state.user,
                    phone: action.payload,
                },
            };
        }
        case SelfReducerEnum.CHANGE_PHOTO_CHOSEN: {
            return {
                ...state,
                user: {
                    ...state.user,
                    photoChosen: action.payload,
                },
            };
        }
        case SelfReducerEnum.TRIGGER_ERRORS: {
            return {
                ...state,
                errors: action.payload,
            };
        }
        default: {
            const actionInvalid: never = action;
            throw new Error('Type invalid.', { cause: actionInvalid });
        }
    }
};
