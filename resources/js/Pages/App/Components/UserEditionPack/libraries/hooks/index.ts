import { IUser } from '@/libraries/types';
import { useEffect, useState } from 'react';

export * from './reducers';

export const useFormData = (userInput: IUser, fileToUpload?: File) => {
    const { name, photoChosen, phone } = userInput;
    const [formData, setFormData] = useState<FormData>();
    useEffect(() => {
        const formData = new FormData();
        formData.append('name', name);
        if (photoChosen && fileToUpload) {
            formData.append('photo', fileToUpload);
        }
        if (phone) {
            formData.append('phone', phone);
        }
        setFormData(formData);
    }, [fileToUpload, name, photoChosen, phone, setFormData]);
    return [formData] as const;
};
