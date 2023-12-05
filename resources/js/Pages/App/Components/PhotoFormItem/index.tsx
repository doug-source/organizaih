import { FormItem } from '@/Pages/App/Components/FormItem';
import { FormItemPhoto_ } from '@/Pages/App/Components/PhotoFormItem/styling';
import { ProfilePhotoInput } from '@/Pages/App/Components/ProfilePhotoInput';
import { ErrorsType } from '@/Pages/App/Screens/types';
import { useTranslate } from '@/libraries/hooks';
import {
    ComponentPropsWithRef,
    ComponentPropsWithoutRef,
    ForwardRefRenderFunction,
    forwardRef,
} from 'react';

type ProfilePhotoInputProps = ComponentPropsWithRef<typeof ProfilePhotoInput>;

type PhotoFormItemProps = ComponentPropsWithoutRef<typeof FormItem> & {
    photo: string | null;
    photoChosen?: string;
    iconNoPhoto: ComponentPropsWithoutRef<
        typeof ProfilePhotoInput
    >['iconNoPhoto'];
    errors: ErrorsType;
    onChange?: (
        value: Parameters<Required<ProfilePhotoInputProps>['onChange']>[0],
    ) => void;
};

const PhotoFormItemInner: ForwardRefRenderFunction<
    HTMLInputElement,
    PhotoFormItemProps
> = (
    { photo, photoChosen, iconNoPhoto, errors, onChange }: PhotoFormItemProps,
    ref,
) => {
    const translate = useTranslate();
    return (
        <FormItemPhoto_
            errorData={errors?.photo}
            labelName='form--field_photo'
            labelText={translate('photo', true) + ':'}
        >
            <ProfilePhotoInput
                iconNoPhoto={iconNoPhoto}
                photo={photo}
                photoChosen={photoChosen}
                onChange={onChange}
                ref={ref}
            />
        </FormItemPhoto_>
    );
};

export const PhotoFormItem = forwardRef<HTMLInputElement, PhotoFormItemProps>(
    PhotoFormItemInner,
);
