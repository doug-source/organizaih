import { Button } from '@/Pages/Gate/Components/Button';
import { FieldError } from '@/Pages/Gate/Components/FieldError';
import { FieldSuccess } from '@/Pages/Gate/Components/FieldSuccess';
import { InputLabel } from '@/Pages/Gate/Components/InputLabel';
import { Row } from '@/Pages/Gate/Components/Row';
import { TextInput } from '@/Pages/Gate/Components/TextInput';
import { ForgotPasswordReducerEnum } from '@/Pages/Gate/ForgotPassword/libraries/enums';
import { useForgotPasswordReducer } from '@/Pages/Gate/ForgotPassword/libraries/hooks/reducers';
import { useForgotPasswordHandler } from '@/Pages/Gate/ForgotPassword/libraries/hooks/submittions';
import { useStatusServer } from '@/Pages/Gate/libraries/contexts/hooks';
import { useTranslate } from '@/libraries/hooks';
import { useState } from 'react';

export const Form = () => {
    const translate = useTranslate();
    const [successMsg, setSuccessMsg] = useState('');
    const [state, dispatch] = useForgotPasswordReducer();
    const [processing, forgotPasswordHandler] = useForgotPasswordHandler(
        state.email,
        setSuccessMsg,
        dispatch,
    );
    const { errors: serverErrors } = useStatusServer();
    const statusError = state.errors.status || serverErrors.status?.shift();
    return (
        <form onSubmit={forgotPasswordHandler}>
            <Row $show={Boolean(statusError)}>
                <FieldError message={statusError} />
            </Row>
            <Row $show={Boolean(successMsg)}>
                <FieldSuccess message={successMsg} />
            </Row>
            <Row>
                <div>
                    <InputLabel
                        htmlFor='email'
                        value={translate('Email', true)}
                    />
                    <FieldError message={state.errors.email} />
                </div>
                <TextInput
                    type='email'
                    name='email'
                    value={state.email}
                    placeholder={translate('insert-email', true)}
                    isFocused={true}
                    autoComplete='no'
                    onChange={(evt) =>
                        dispatch({
                            type: ForgotPasswordReducerEnum.CHANGE_EMAIL,
                            payload: evt.target.value,
                        })
                    }
                />
            </Row>
            <Button
                type='submit'
                disabled={processing}
                strBtnText={translate('continue', true)}
            />
        </form>
    );
};
