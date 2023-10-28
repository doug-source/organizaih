import { DefaultForm_ } from '@/Pages/App/Components/DefaultForm/styling';
import { InputHidden } from '@/Pages/App/Components/InputHidden';
import { SubmitBtn_ } from '@/Pages/App/Components/SubmitBtn';
import { useTokenRequest, useTranslate } from '@/libraries/hooks';
import { ComponentPropsWithoutRef, ReactNode } from 'react';

type DefaultFormProps = {
    children?: ReactNode;
    disabled?: boolean;
} & ComponentPropsWithoutRef<'form'>;

export const DefaultForm = ({
    children,
    disabled = false,
    method,
    ...remain
}: DefaultFormProps) => {
    const tokenRequest = useTokenRequest();
    const translate = useTranslate();
    return (
        <DefaultForm_ {...remain}>
            <InputHidden
                show
                name='_token'
                value={tokenRequest}
            />
            <InputHidden
                show={Boolean(method)}
                name='_method'
                value={method ?? ''}
            />
            {children}
            <SubmitBtn_
                as='input'
                disabled={!navigator.onLine || disabled}
                value={translate('save', true)}
            />
        </DefaultForm_>
    );
};

export { DefaultForm_ };
