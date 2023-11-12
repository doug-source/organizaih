import { Button } from '@/Pages/Gate/Components/Button';
import { FieldError } from '@/Pages/Gate/Components/FieldError';
import { FieldSuccess } from '@/Pages/Gate/Components/FieldSuccess';
import { InputLabel } from '@/Pages/Gate/Components/InputLabel';
import { Row } from '@/Pages/Gate/Components/Row';
import { TextInput } from '@/Pages/Gate/Components/TextInput';
import {
    useResetPasswordFields,
    useResetPasswordToken,
} from '@/Pages/Gate/ResetPassword/libraries/contexts/hooks';
import { ResetPasswordReducerEnum } from '@/Pages/Gate/ResetPassword/libraries/enums';
import { useResetPasswordReducer } from '@/Pages/Gate/ResetPassword/libraries/hooks/reducers';
import { useResetPasswordHandler } from '@/Pages/Gate/ResetPassword/libraries/hooks/submittions';
import { useStatusServer } from '@/Pages/Gate/libraries/contexts/hooks';
import { useTranslate } from '@/libraries/hooks';
import { useState } from 'react';

export const Form = () => {
    const translate = useTranslate();
    const fields = useResetPasswordFields();
    const resetPassToken = useResetPasswordToken();
    const [successMsg, setSuccessMsg] = useState('');

    const [state, dispatch] = useResetPasswordReducer(fields);
    const [processing, resetPasswordHandler] = useResetPasswordHandler(
        state.email,
        state.password,
        state.password_confirmation,
        resetPassToken,
        setSuccessMsg,
        dispatch,
    );

    const { errors: serverErrors } = useStatusServer();
    const statusError = state.errors.status || serverErrors.status?.shift();

    return (
        <form onSubmit={resetPasswordHandler}>
            <Row $show={Boolean(statusError)}>
                <FieldError message={statusError} />
            </Row>
            <Row $show={Boolean(successMsg)}>
                <FieldSuccess message={successMsg} />
            </Row>
            <TextInput
                type='hidden'
                name='email'
                value={state.email}
            />
            <Row>
                <div>
                    <InputLabel
                        htmlFor='password'
                        value={translate('Password', true)}
                    />
                    <FieldError message={state.errors.password} />
                </div>
                <TextInput
                    id='password'
                    type='password'
                    name='password'
                    value={state.password}
                    isFocused={true}
                    autoComplete='no'
                    onChange={(evt) =>
                        dispatch({
                            type: ResetPasswordReducerEnum.CHANGE_PASSWORD,
                            payload: evt.target.value,
                        })
                    }
                />
            </Row>
            <Row>
                <div>
                    <InputLabel
                        htmlFor='password_confirmation'
                        value={translate('password-confirmation', true)}
                    />
                    <FieldError message={state.errors.password_confirmation} />
                </div>
                <TextInput
                    id='password_confirmation'
                    type='password'
                    name='password_confirmation'
                    value={state.password_confirmation}
                    autoComplete='no'
                    onChange={(evt) =>
                        dispatch({
                            type: ResetPasswordReducerEnum.CHANGE_PASSWORD_CONFIRMATION,
                            payload: evt.target.value,
                        })
                    }
                />
            </Row>
            <Button
                type='submit'
                disabled={processing || !Boolean(state.email.trim())}
                strBtnText={translate('continue', true)}
            />
        </form>
    );
};
