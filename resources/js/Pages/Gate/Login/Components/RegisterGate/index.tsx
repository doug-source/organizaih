import {
    RegisterGateDiv_,
    RegisterGateRow_,
} from '@/Pages/Gate/Login/Components/RegisterGate/styling';
import { Link_ } from '@/Pages/Gate/Login/styling';
import { useTranslate } from '@/libraries/hooks';
import { endpoints } from '@/settings';

export const RegisterGate = () => {
    const translate = useTranslate();
    return (
        <RegisterGateDiv_>
            <RegisterGateRow_>
                <Link_ href={endpoints.register.create}>
                    {translate('register-account', true)}
                </Link_>
            </RegisterGateRow_>
        </RegisterGateDiv_>
    );
};
