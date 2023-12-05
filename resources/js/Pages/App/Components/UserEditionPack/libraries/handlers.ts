import { PhotoFormItem } from '@/Pages/App/Components/PhotoFormItem';
import { SelfReducerEnum } from '@/Pages/App/Components/UserEditionPack/libraries/enums';
import { useSelfReducer } from '@/Pages/App/Components/UserEditionPack/libraries/hooks/reducers';
import { ChangeEventHandler, ComponentPropsWithoutRef } from 'react';

type DispatchFn = ReturnType<typeof useSelfReducer>[1];

export const makeNameChange = (
    dispatch: DispatchFn,
): ChangeEventHandler<HTMLInputElement> => {
    return (evt) => {
        dispatch({
            type: SelfReducerEnum.CHANGE_NAME,
            payload: evt.target.value,
        });
    };
};

export const makePhoneChange = (
    dispatch: DispatchFn,
): ChangeEventHandler<HTMLInputElement> => {
    return (evt) => {
        dispatch({
            type: SelfReducerEnum.CHANGE_PHONE,
            payload: evt.target.value,
        });
    };
};

export const makePhotoChange = (
    dispatch: DispatchFn,
): Required<ComponentPropsWithoutRef<typeof PhotoFormItem>>['onChange'] => {
    return (value) => {
        dispatch({
            type: SelfReducerEnum.CHANGE_PHOTO_CHOSEN,
            payload: value,
        });
    };
};
