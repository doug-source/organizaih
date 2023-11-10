import { Button } from '@/Pages/Gate/Components/Button';
import { FieldError } from '@/Pages/Gate/Components/FieldError';
import { GoogleCredentials } from '@/Pages/Gate/Components/GoogleCredentials';
import { InputLabel } from '@/Pages/Gate/Components/InputLabel';
import { Row } from '@/Pages/Gate/Components/Row';
import { TextInput } from '@/Pages/Gate/Components/TextInput';
import { Checkbox } from '@/Pages/Gate/Login/Components/Checkbox';
import {
    ForgotPasswordLink_,
    RememberRow_,
    ThirdRowLabel_,
    ThirdRowText_,
} from '@/Pages/Gate/Login/Components/Form/styling';
import { AuthReducerEnum } from '@/Pages/Gate/Login/libraries/enums';
import { useAuthReducer } from '@/Pages/Gate/Login/libraries/hooks/reducers';
import { useAuthHandler } from '@/Pages/Gate/Login/libraries/hooks/submittions';
import { useStatusServer } from '@/Pages/Gate/libraries/contexts/hooks';
import { useTranslate } from '@/libraries/hooks';

export const Form = () => {
    const translate = useTranslate();
    const [state, dispatch] = useAuthReducer();
    const [processing, authHandler, errors] = useAuthHandler(
        state.email,
        state.password,
        state.remember,
    );
    const { errors: serverErrors } = useStatusServer();
    const statusError = errors.status || serverErrors.status?.shift();
    return (
        <form onSubmit={authHandler}>
            <Row $show={Boolean(statusError)}>
                <FieldError message={statusError} />
            </Row>
            <Row>
                <div>
                    <InputLabel
                        htmlFor='email'
                        value={translate('Email', true)}
                    />
                    <FieldError message={errors.email} />
                </div>
                <TextInput
                    id='email'
                    type='email'
                    name='email'
                    value={state.email}
                    isFocused={true}
                    autoComplete='no'
                    onChange={(evt) =>
                        dispatch({
                            type: AuthReducerEnum.CHANGE_EMAIL,
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
                    <FieldError message={errors.password} />
                </div>
                <TextInput
                    id='password'
                    type='password'
                    name='password'
                    value={state.password}
                    autoComplete='no'
                    onChange={(evt) =>
                        dispatch({
                            type: AuthReducerEnum.CHANGE_PASSWORD,
                            payload: evt.target.value,
                        })
                    }
                />
            </Row>
            <Row>
                <GoogleCredentials
                    link={window.data.googleAuthUrl ?? ''}
                    text={translate('sign-in-google', true)}
                />
            </Row>
            <RememberRow_>
                <ThirdRowLabel_>
                    <Checkbox
                        name='remember'
                        checked={state.remember}
                        onChange={(evt) => {
                            dispatch({
                                type: AuthReducerEnum.CHANGE_REMEMBER,
                                payload: Boolean(evt.target.checked),
                            });
                        }}
                    />
                    <ThirdRowText_>
                        {translate('remember-me', true)}
                    </ThirdRowText_>
                </ThirdRowLabel_>
            </RememberRow_>
            <Row>
                <ForgotPasswordLink_ href='/forgot-password'>
                    {translate('forgot-password', true)}?
                </ForgotPasswordLink_>
            </Row>
            <Button
                type='submit'
                disabled={processing}
                strBtnText={translate('Log in', true)}
            />
        </form>
    );
};
