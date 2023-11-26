import {
    RegisterGateDiv_,
    RegisterGateRow_,
} from '@/Pages/Gate/Login/Components/RegisterGate/styling';
import { Link_ } from '@/Pages/Gate/Login/styling';
import { useTranslate } from '@/libraries/hooks';
import { navigations } from '@/settings';

export const RegisterGate = () => {
    const translate = useTranslate();
    return (
        <RegisterGateDiv_>
            <RegisterGateRow_>
                <Link_ href={navigations.registerRequest.create}>
                    {translate('register-account', true)}
                </Link_>
            </RegisterGateRow_>
        </RegisterGateDiv_>
    );
};
