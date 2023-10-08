import { Checkbox, FieldError, InputLabel } from '@/Auth';
import { useAuthStatusServer, useTranslate } from '@/libraries/hooks/Contexts';
import { useAuthHandler } from '@/libraries/submittions';
import { AuthReducerEnum, useAuthReducer } from '../libraries';
import {
    Button_,
    Link_,
    RememberRow_,
    Row_,
    TextInput_,
    ThirdRowLabel_,
    ThirdRowText_,
} from './styling';

type FormProps = {};

export const Form = ({}: FormProps) => {
    const translate = useTranslate();
    const [state, dispatch] = useAuthReducer();
    const [processing, authHandler, errors] = useAuthHandler(
        state.email,
        state.password,
    );
    const { errors: serverErrors } = useAuthStatusServer();
    const statusError = errors.status || serverErrors.status?.shift();
    return (
        <form onSubmit={authHandler}>
            <Row_ $show={Boolean(statusError)}>
                <FieldError message={statusError} />
            </Row_>
            <Row_>
                <div>
                    <InputLabel
                        htmlFor='email'
                        value={translate('Email', true)}
                    />
                    <FieldError message={errors.email} />
                </div>
                <TextInput_
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
            </Row_>
            <Row_>
                <div>
                    <InputLabel
                        htmlFor='password'
                        value={translate('Password', true)}
                    />
                    <FieldError message={errors.password} />
                </div>
                <TextInput_
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
            </Row_>
            <RememberRow_>
                <ThirdRowLabel_>
                    <Checkbox name='remember' />
                    <ThirdRowText_>
                        {translate('remember-me', true)}
                    </ThirdRowText_>
                </ThirdRowLabel_>
            </RememberRow_>
            <Row_>
                <Link_ href='/'>{translate('forgot-password', true)}?</Link_>
            </Row_>
            <Button_
                type='submit'
                disabled={processing}
                strBtnText={translate('Log in', true)}
            />
        </form>
    );
};
