import { LoadingIcon } from '@/Components/LoadingIcon';
import { GuestLayout } from '@/Pages/Gate/Components/GuestLayout';
import { Form } from '@/Pages/Gate/Login/Components/Form';
import { RegisterGate } from '@/Pages/Gate/Login/Components/RegisterGate';
import { GlobalStyle } from '@/Pages/Gate/Login/styling';
import { PackContext } from '@/Pages/Gate/libraries/PackContext';
import { Theme } from '@/settings';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

export const Login = () => {
    const theme = window.data.themeKey === 'light' ? Theme.light : Theme.dark;
    const { loadingIcon: loadingIconMeasure } = theme.gate.measures.guestLayout;
    const [loading, setLoading] = useState(false);
    return (
        <ThemeProvider theme={theme}>
            <PackContext
                loadingDispatch={setLoading}
                type='login'
            >
                <GlobalStyle />
                <GuestLayout
                    loading={
                        <LoadingIcon
                            show={loading}
                            size={loadingIconMeasure.size}
                        />
                    }
                >
                    <Form />
                    <RegisterGate />
                </GuestLayout>
            </PackContext>
        </ThemeProvider>
    );
};
