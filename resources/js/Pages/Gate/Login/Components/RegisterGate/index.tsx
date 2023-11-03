import {
    RegisterBtn_,
    RegisterGateForm_,
    RegisterGateRow_,
} from '@/Pages/Gate/Login/Components/RegisterGate/styling';
import { useTokenRequest, useTranslate } from '@/libraries/hooks';
import { endpoints } from '@/settings';
import { createRef } from 'react';

export const RegisterGate = () => {
    const translate = useTranslate();
    const formRef = createRef<HTMLFormElement>();
    const csrfToken = useTokenRequest();
    return (
        <RegisterGateForm_
            ref={formRef}
            action={endpoints.register.create}
            method='POST'
        >
            <input
                type='hidden'
                name='_token'
                value={csrfToken}
            />
            <RegisterGateRow_>
                <RegisterBtn_
                    as='button'
                    type='submit'
                >
                    {translate('register-account', true)}
                </RegisterBtn_>
            </RegisterGateRow_>
        </RegisterGateForm_>
    );
};
