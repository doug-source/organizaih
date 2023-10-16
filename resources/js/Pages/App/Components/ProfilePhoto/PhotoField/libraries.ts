import { ProfilePhoto } from '@/Pages/App/Components/ProfilePhoto';
import {
    ChangeEventHandler,
    ComponentPropsWithRef,
    Dispatch,
    ForwardedRef,
    MutableRefObject,
    RefObject,
    SetStateAction,
} from 'react';

type ProfilePhotoProps = ComponentPropsWithRef<typeof ProfilePhoto>;

type MakePhotoRefReturn =
    | ((instance: HTMLInputElement | null) => void)
    | RefObject<HTMLInputElement>
    | undefined
    | null;

export const makePhotoRef = (
    ref: ForwardedRef<HTMLInputElement>,
    photoInputRef: MutableRefObject<HTMLInputElement | null>,
): MakePhotoRefReturn => {
    return (node) => {
        photoInputRef.current = node;
        if (typeof ref === 'function') {
            ref(node);
        } else if (ref) {
            ref.current = node;
        }
    };
};

export const makePhotoChange = (
    setImgSrc: Dispatch<SetStateAction<string | null | undefined>>,
    onChange: ProfilePhotoProps['onChange'],
): ChangeEventHandler<HTMLInputElement> => {
    return (evt) => {
        const $input = evt.target;
        if ($input === null) {
            return;
        }
        const $file = ($input.files ?? [])[0];
        const reader = new FileReader();
        if (typeof $file !== 'undefined') {
            reader.readAsDataURL($file);
        } else {
            setImgSrc('');
        }
        reader.addEventListener('loadend', () => {
            if ($input.value.match(/\.(jpe?g|png)$/)) {
                if (typeof reader.result === 'string') {
                    setImgSrc(reader.result);
                }
            }
        });
        onChange && onChange($input.value);
    };
};
