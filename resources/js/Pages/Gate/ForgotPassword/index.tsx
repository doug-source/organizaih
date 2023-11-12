import { LoadingIcon } from '@/Components/LoadingIcon';
import { GuestLayout } from '@/Pages/Gate/Components/GuestLayout';
import { HeadingForm } from '@/Pages/Gate/Components/HeadingForm';
import { Form } from '@/Pages/Gate/ForgotPassword/Components/Form';
import { GlobalStyle } from '@/Pages/Gate/ForgotPassword/styling';
import { PackContext } from '@/Pages/Gate/libraries/PackContext';
import { Theme } from '@/settings/Theme';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

export const ForgotPassword = () => {
    const theme = window.data.themeKey === 'light' ? Theme.light : Theme.dark;
    const headingMeasure = theme.forgotPass.measures.heading;
    const { loadingIcon: loadingIconMeasure } = theme.gate.measures.guestLayout;
    const [loading, setLoading] = useState(false);
    return (
        <ThemeProvider theme={theme}>
            <PackContext
                loadingDispatch={setLoading}
                type='forgot-password'
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
                    <HeadingForm
                        textKey='forgot-password-heading'
                        marginTop={headingMeasure.padding.top}
                        marginBottom={headingMeasure.padding.bottom}
                    />
                    <Form />
                </GuestLayout>
            </PackContext>
        </ThemeProvider>
    );
};
