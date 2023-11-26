import { Button } from '@/Pages/Gate/Components/Button';
import { FieldError } from '@/Pages/Gate/Components/FieldError';
import { FieldSuccess } from '@/Pages/Gate/Components/FieldSuccess';
import { GoogleCredentials } from '@/Pages/Gate/Components/GoogleCredentials';
import { InputLabel } from '@/Pages/Gate/Components/InputLabel';
import { Row } from '@/Pages/Gate/Components/Row';
import { TextInput } from '@/Pages/Gate/Components/TextInput';
import { useRegisterRequestFields } from '@/Pages/Gate/RegisterRequest/libraries/contexts/hooks';
import { RegisterRequestReducerEnum } from '@/Pages/Gate/RegisterRequest/libraries/enums';
import { useRegisterRequestReducer } from '@/Pages/Gate/RegisterRequest/libraries/hooks/reducers';
import { useRegisterRequestHandler } from '@/Pages/Gate/RegisterRequest/libraries/hooks/submittions';
import { useStatusServer } from '@/Pages/Gate/libraries/contexts/hooks';
import { useTranslate } from '@/libraries/hooks';
import { useState } from 'react';

export const Form = () => {
    const translate = useTranslate();
    const [successMsg, setSuccessMsg] = useState('');

    const { errors: serverErrors } = useStatusServer();
    const fields = useRegisterRequestFields();

    const [state, dispatch] = useRegisterRequestReducer(fields);
    const [processing, registerHandler] = useRegisterRequestHandler(
        state.email,
        state.phone,
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
                        htmlFor='email'
                        value={`${translate('Email', true)}:`}
                    />
                    <FieldError message={state.errors.email} />
                </div>
                <TextInput
                    id='email'
                    type='email'
                    name='email'
                    value={state.email}
                    autoComplete='no'
                    isFocused={!fields}
                    readOnly={Boolean(fields)}
                    onChange={(evt) =>
                        dispatch({
                            type: RegisterRequestReducerEnum.CHANGE_EMAIL,
                            payload: evt.target.value,
                        })
                    }
                />
            </Row>
            <Row>
                <div>
                    <InputLabel
                        htmlFor='phone'
                        value={`${translate('phone', true)}: (${translate(
                            'optional',
                        )})`}
                    />
                    <FieldError message={state.errors.phone} />
                </div>
                <TextInput
                    id='phone'
                    name='phone'
                    value={state.phone}
                    isFocused={Boolean(fields)}
                    autoComplete='no'
                    onChange={(evt) =>
                        dispatch({
                            type: RegisterRequestReducerEnum.CHANGE_PHONE,
                            payload: evt.target.value,
                        })
                    }
                />
            </Row>
            <GoogleCredentials
                show={!fields}
                link={window.data.googleAuthUrl ?? ''}
                text={translate('use-google-account', true)}
            />
            <Button
                type='submit'
                disabled={processing}
                strBtnText={translate('to-request', true)}
            />
        </form>
    );
};
