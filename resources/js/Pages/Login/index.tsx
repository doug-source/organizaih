import { GuestLayout } from '@/Auth';
import { Theme } from '@/settings';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Form } from './Form';
import { WrapContexts } from './WrapContexts';
import { GlobalStyle, LoadingIcon_ } from './styling';

export const Login = () => {
    const theme = window.data.themeKey === 'light' ? Theme.light : Theme.dark;
    // const theme = Theme.dark;
    const [loading, setLoading] = useState(false);
    return (
        <ThemeProvider theme={theme}>
            <WrapContexts loadingDispatch={setLoading}>
                <GlobalStyle />
                <GuestLayout
                    loading={
                        <LoadingIcon_
                            show={loading}
                            size={theme.login.measures.loadingIcon.size}
                        />
                    }
                >
                    <Form />
                </GuestLayout>
            </WrapContexts>
        </ThemeProvider>
    );
};
