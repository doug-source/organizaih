import { Button } from '@/Pages/Gate/Components/Button';
import { FieldError } from '@/Pages/Gate/Components/FieldError';
import { FieldSuccess } from '@/Pages/Gate/Components/FieldSuccess';
import { GoogleCredentials } from '@/Pages/Gate/Components/GoogleCredentials';
import { InputLabel } from '@/Pages/Gate/Components/InputLabel';
import { Row } from '@/Pages/Gate/Components/Row';
import { TextInput } from '@/Pages/Gate/Components/TextInput';
import { useRegisterFields } from '@/Pages/Gate/Register/libraries/contexts/hooks';
import { RegisterReducerEnum } from '@/Pages/Gate/Register/libraries/enums';
import { useRegisterReducer } from '@/Pages/Gate/Register/libraries/hooks/reducers';
import { useRegisterHandler } from '@/Pages/Gate/Register/libraries/hooks/submittions';
import { useStatusServer } from '@/Pages/Gate/libraries/contexts/hooks';
import { useTranslate } from '@/libraries/hooks';
import { useState } from 'react';

export const Form = () => {
    const translate = useTranslate();
    const [successMsg, setSuccessMsg] = useState('');

    const { errors: serverErrors } = useStatusServer();
    const fields = useRegisterFields();

    const [state, dispatch] = useRegisterReducer(fields);
    const [processing, registerHandler] = useRegisterHandler(
        state.name,
        state.email,
        state.password,
        state.password_confirmation,
        setSuccessMsg,
        dispatch,
    );
    const statusError = state.errors.status || serverErrors.status?.shift();
    return (
        <form onSubmit={registerHandler}>
            <Row $show={Boolean(statusError)}>
                <FieldError message={statusError} />
            </Row>
            <Row $show={Boolean(successMsg)}>
                <FieldSuccess message={successMsg} />
            </Row>
            <Row>
                <div>
                    <InputLabel
                        htmlFor='name'
                        value={translate('name', true)}
                    />
                    <FieldError message={state.errors.name} />
                </div>
                <TextInput
                    id='name'
                    name='name'
                    value={state.name}
                    isFocused={!fields}
                    autoComplete='no'
                    readOnly={Boolean(fields)}
                    onChange={(evt) =>
                        dispatch({
                            type: RegisterReducerEnum.CHANGE_NAME,
                            payload: evt.target.value,
                        })
                    }
                />
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
                    id='email'
                    type='email'
                    name='email'
                    value={state.email}
                    autoComplete='no'
                    readOnly={Boolean(fields)}
                    onChange={(evt) =>
                        dispatch({
                            type: RegisterReducerEnum.CHANGE_EMAIL,
                            payload: evt.target.value,
                        })
                    }
                />
            </Row>
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
                    isFocused={Boolean(fields)}
                    autoComplete='no'
                    onChange={(evt) =>
                        dispatch({
                            type: RegisterReducerEnum.CHANGE_PASSWORD,
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
                            type: RegisterReducerEnum.CHANGE_PASSWORD_CONFIRMATION,
                            payload: evt.target.value,
                        })
                    }
                />
            </Row>
            <GoogleCredentials
                show={!fields}
                link={window.data.googleAuthUrl ?? ''}
                text={translate('sign-up-google', true)}
            />
            <Button
                type='submit'
                disabled={processing}
                strBtnText={translate('register', true)}
            />
        </form>
    );
};
