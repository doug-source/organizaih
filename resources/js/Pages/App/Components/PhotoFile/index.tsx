import { makePhotoRef } from '@/Pages/App/Components/PhotoFile/libraries';
import { usePhotoHandler } from '@/Pages/App/Components/PhotoFile/libraries/hooks';
import {
    FileUpload_,
    InputFile_,
    UploadIcon_,
} from '@/Pages/App/Components/PhotoFile/styling';
import { usePhotoFile } from '@/Pages/App/libraries/hooks/Contexts';
import { ForwardedRef, useRef } from 'react';

type PhotoFileProps = {
    onChange?: (value: string) => void;
    forwardedRef: ForwardedRef<HTMLInputElement>;
};

export const PhotoFile = ({ onChange, forwardedRef }: PhotoFileProps) => {
    const photoInputRef = useRef<HTMLInputElement | null>(null);
    const photoHandler = usePhotoHandler(onChange);
    const photoFile = usePhotoFile();
    return (
        <FileUpload_>
            <UploadIcon_ />
            <h3>{photoFile?.name ?? 'Click box to upload'}</h3>
            <InputFile_
                ref={makePhotoRef(forwardedRef, photoInputRef)}
                onChange={photoHandler}
            />
        </FileUpload_>
    );
};
