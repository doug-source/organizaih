import { LoadingIcon } from '@/Components/LoadingIcon';
import { GuestLayout } from '@/Pages/Gate/Components/GuestLayout';
import { Form } from '@/Pages/Gate/Register/Components/Form';
import { Heading } from '@/Pages/Gate/Register/Components/Heading';
import { GlobalStyle } from '@/Pages/Gate/Register/styling';
import { PackContext } from '@/Pages/Gate/libraries/PackContext';
import { Theme } from '@/settings/Theme';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

export const Register = () => {
    const theme = window.data.themeKey === 'light' ? Theme.light : Theme.dark;
    const [loading, setLoading] = useState(false);
    return (
        <ThemeProvider theme={theme}>
            <PackContext
                loadingDispatch={setLoading}
                type='register-gate'
            >
                <GlobalStyle />
                <GuestLayout
                    loading={
                        <LoadingIcon
                            show={loading}
                            size={theme.login.measures.loadingIcon.size}
                        />
                    }
                >
                    <Heading />
                    <Form />
                </GuestLayout>
            </PackContext>
        </ThemeProvider>
    );
};
