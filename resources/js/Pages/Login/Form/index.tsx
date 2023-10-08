import { Checkbox, FieldError, InputLabel } from '@/Auth';
import { useTranslate } from '@/libraries/hooks/Contexts';
import { useAuthHandler } from '@/libraries/submittions';
import { AuthReducerEnum, useAuthReducer } from '../libraries';
import {
    Button_,
    FourthRow_,
    Link_,
    SecondRow_,
    TextInput_,
    ThirdRowLabel_,
    ThirdRowText_,
    ThirdRow_,
} from './styling';

type FormProps = {};

export const Form = ({}: FormProps) => {
    const translate = useTranslate();
    const [state, dispatch] = useAuthReducer();
    const [processing, authHandler, errors] = useAuthHandler(
        state.email,
        state.password,
    );
    return (
        <form onSubmit={authHandler}>
            <div>
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
            </div>
            <SecondRow_>
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
            </SecondRow_>
            <ThirdRow_>
                <ThirdRowLabel_>
                    <Checkbox name='remember' />
                    <ThirdRowText_>
                        {translate('remember-me', true)}
                    </ThirdRowText_>
                </ThirdRowLabel_>
            </ThirdRow_>
            <FourthRow_>
                <Link_ href='/'>{translate('forgot-password', true)}?</Link_>
            </FourthRow_>
            <Button_
                type='submit'
                disabled={processing}
                strBtnText={translate('Log in', true)}
            />
        </form>
    );
};
