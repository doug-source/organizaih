import { ResetPasswordFields } from '@/Pages/Gate/ResetPassword/libraries/contexts/ResetPasswordFields';
import { ResetPasswordToken } from '@/Pages/Gate/ResetPassword/libraries/contexts/ResetPasswordToken';
import { ReactNode } from 'react';

const { resetPassword: resetPassData } = window.data;

type PackContextProps = {
    children: ReactNode;
};

export const InnerPackContext = ({ children }: PackContextProps) => {
    return (
        <ResetPasswordFields value={window.data.resetPassword?.fields}>
            <ResetPasswordToken value={resetPassData.token}>
                {children}
            </ResetPasswordToken>
        </ResetPasswordFields>
    );
};
