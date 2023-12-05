import { AnonymousIcon } from '@/Pages/App/Components/AnonymousIcon';
import { DefaultForm } from '@/Pages/App/Components/DefaultForm';
import { FormItem } from '@/Pages/App/Components/FormItem';
import { InputForm } from '@/Pages/App/Components/InputForm';
import { PhotoFormItem } from '@/Pages/App/Components/PhotoFormItem';
import {
    makeNameChange,
    makePhoneChange,
    makePhotoChange,
} from '@/Pages/App/Components/UserEditionPack/libraries/handlers';
import { useSelfReducer } from '@/Pages/App/Components/UserEditionPack/libraries/hooks/reducers';
import { useSelfSubmit } from '@/Pages/App/Components/UserEditionPack/libraries/hooks/submittions';
import { ErrorsType } from '@/Pages/App/Screens/types';
import { columnSizeDB } from '@/Pages/App/settings';
import { useTranslate } from '@/libraries/hooks';
import { IUser } from '@/libraries/types';
import { ComponentPropsWithoutRef, useState } from 'react';

type UserEditionPackProps = Omit<
    ComponentPropsWithoutRef<typeof DefaultForm>,
    'children' | 'disabled'
> & {
    user: IUser;
};

export const UserEditionPack = ({ user, ...remain }: UserEditionPackProps) => {
    const translate = useTranslate();
    const [state, dispatch] = useSelfReducer(user);
    const [errors, setErrors] = useState<ErrorsType>({});

    const [onSelfSubmit, photoRef] = useSelfSubmit(state.user, setErrors);

    const nameChangeHandler = makeNameChange(dispatch);
    const phoneChangeHandler = makePhoneChange(dispatch);
    const photoChangeHandler = makePhotoChange(dispatch);

    return (
        <DefaultForm
            {...remain}
            onSubmit={onSelfSubmit}
        >
            <PhotoFormItem
                photo={state.user.photo}
                photoChosen={state.user.photoChosen}
                errors={errors}
                iconNoPhoto={<AnonymousIcon />}
                labelName='form--field_photo'
                labelText={translate('photo', true) + ':'}
                onChange={photoChangeHandler}
                ref={photoRef}
            />
            <FormItem
                errorData={errors?.name}
                labelName='form--field_name'
                labelText={translate('name', true) + ':'}
            >
                <InputForm
                    id='form--field_name'
                    name='name'
                    value={state.user.name}
                    maxLength={columnSizeDB.userName}
                    onChange={nameChangeHandler}
                    required
                />
            </FormItem>
            <FormItem
                errorData={errors?.phone}
                labelName='form--field_phone'
                labelText={translate('phone', true) + ':'}
            >
                <InputForm
                    id='form--field_phone'
                    name='phone'
                    value={state.user.phone ?? ''}
                    maxLength={columnSizeDB.customerPhone}
                    onChange={phoneChangeHandler}
                />
            </FormItem>
        </DefaultForm>
    );
};
