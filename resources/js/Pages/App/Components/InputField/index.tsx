import { InputField_ } from '@/Pages/App/Components/InputField/styling';
import { InputRequest } from '@/Pages/App/Components/InputRequest';
import { useTranslate } from '@/libraries';
import { ComponentPropsWithoutRef, forwardRef } from 'react';

type InputRequestProps = ComponentPropsWithoutRef<typeof InputRequest>;

type InputFieldProps = {
    className?: string;
    placeholderKey: InputRequestProps['placeholderKey'];
    maxLength: InputRequestProps['maxLength'];
};

export const InputField = forwardRef<HTMLInputElement | null, InputFieldProps>(
    ({ className, placeholderKey, maxLength }, ref) => {
        const translate = useTranslate();
        return (
            <InputField_
                ref={ref}
                className={className}
                placeholder={translate(placeholderKey, true)}
                maxLength={maxLength}
            />
        );
    },
);
