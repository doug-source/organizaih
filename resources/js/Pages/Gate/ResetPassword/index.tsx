import { LoadingIcon } from '@/Components/LoadingIcon';
import { GuestLayout } from '@/Pages/Gate/Components/GuestLayout';
import { HeadingForm } from '@/Pages/Gate/Components/HeadingForm';
import { Form } from '@/Pages/Gate/ResetPassword/Components/Form';
import { InnerPackContext } from '@/Pages/Gate/ResetPassword/libraries/InnerPackContext';
import { PackContext } from '@/Pages/Gate/libraries/PackContext';
import { GlobalStyle } from '@/Pages/Gate/styling';
import { Theme } from '@/settings/Theme';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

export const ResetPassword = () => {
    const theme = window.data.themeKey === 'light' ? Theme.light : Theme.dark;
    const headingMeasure = theme.resetPass.measures.heading;
    const { loadingIcon: loadingIconMeasure } = theme.gate.measures.guestLayout;
    const [loading, setLoading] = useState(false);
    return (
        <ThemeProvider theme={theme}>
            <PackContext
                loadingDispatch={setLoading}
                type='reset-password'
            >
                <InnerPackContext>
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
                            textKey='reset-password-heading'
                            marginTop={headingMeasure.padding.top}
                            marginBottom={headingMeasure.padding.bottom}
                        />
                        <Form />
                    </GuestLayout>
                </InnerPackContext>
            </PackContext>
        </ThemeProvider>
    );
};
