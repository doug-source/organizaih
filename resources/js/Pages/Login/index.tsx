import { GuestLayout } from '@/Auth';
import { LoadingIcon } from '@/Components/LoadingIcon';
import { PackContext } from '@/Pages/libraries/PackContext';
import { Theme } from '@/settings';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Form } from './Form';
import { GlobalStyle } from './styling';

export const Login = () => {
    const theme = window.data.themeKey === 'light' ? Theme.light : Theme.dark;
    const [loading, setLoading] = useState(false);
    return (
        <ThemeProvider theme={theme}>
            <PackContext loadingDispatch={setLoading}>
                <GlobalStyle />
                <GuestLayout
                    loading={
                        <LoadingIcon
                            show={loading}
                            size={theme.login.measures.loadingIcon.size}
                        />
                    }
                >
                    <Form />
                </GuestLayout>
            </PackContext>
        </ThemeProvider>
    );
};
