import { ProfilePhoto } from '@/Pages/App/Components/ProfilePhoto';
import {
    makePhotoChange,
    makePhotoRef,
} from '@/Pages/App/Components/ProfilePhoto/PhotoField/libraries';
import { PhotoField_ } from '@/Pages/App/Components/ProfilePhoto/PhotoField/styling';
import {
    ComponentPropsWithRef,
    Dispatch,
    ForwardedRef,
    SetStateAction,
    useRef,
} from 'react';

type ProfilePhotoProps = ComponentPropsWithRef<typeof ProfilePhoto>;

type PhotoFieldProps = {
    forwardedRef: ForwardedRef<HTMLInputElement>;
    setImgSrc: Dispatch<SetStateAction<string | null | undefined>>;
    onChange: ProfilePhotoProps['onChange'];
};

export const PhotoField = ({
    forwardedRef,
    setImgSrc,
    onChange,
}: PhotoFieldProps) => {
    const photoInputRef = useRef<HTMLInputElement | null>(null);
    return (
        <PhotoField_
            ref={makePhotoRef(forwardedRef, photoInputRef)}
            onChange={makePhotoChange(setImgSrc, onChange)}
        />
    );
};
