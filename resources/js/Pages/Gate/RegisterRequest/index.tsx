import { LoadingIcon } from '@/Components/LoadingIcon';
import { GuestLayout } from '@/Pages/Gate/Components/GuestLayout';
import { HeadingForm } from '@/Pages/Gate/Components/HeadingForm';
import { Form } from '@/Pages/Gate/RegisterRequest/Components/Form';
import { RegisterRequestFields } from '@/Pages/Gate/RegisterRequest/libraries/contexts/RegisterRequestFields';
import { GlobalStyle } from '@/Pages/Gate/RegisterRequest/styling';
import { PackContext } from '@/Pages/Gate/libraries/PackContext';
import { Theme } from '@/settings/Theme';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

export const RegisterRequest = () => {
    const theme = window.data.themeKey === 'light' ? Theme.light : Theme.dark;
    const { heading: headingMeasure } = theme.registerRequest.measures;
    const { loadingIcon: loadingIconMeasure } = theme.gate.measures.guestLayout;
    const [loading, setLoading] = useState(false);
    return (
        <ThemeProvider theme={theme}>
            <PackContext
                loadingDispatch={setLoading}
                type='register-request'
            >
                <RegisterRequestFields
                    value={window.data?.registerRequest?.fields}
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
                            textKey='register-request'
                            marginTop={headingMeasure.padding.top}
                            marginBottom={headingMeasure.padding.bottom}
                        />
                        <Form />
                    </GuestLayout>
                </RegisterRequestFields>
            </PackContext>
        </ThemeProvider>
    );
};
