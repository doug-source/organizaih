import { LoadingIcon } from '@/Components/LoadingIcon';
import { GuestLayout } from '@/Pages/Gate/Components/GuestLayout';
import { HeadingForm } from '@/Pages/Gate/Components/HeadingForm';
import { Form } from '@/Pages/Gate/Register/Components/Form';
import { RegisterFields } from '@/Pages/Gate/Register/libraries/contexts/RegisterFields';
import { PackContext } from '@/Pages/Gate/libraries/PackContext';
import { GlobalStyle } from '@/Pages/Gate/styling';
import { Theme } from '@/settings/Theme';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

export const Register = () => {
    const theme = window.data.themeKey === 'light' ? Theme.light : Theme.dark;
    const { heading: headingMeasure } = theme.register.measures;
    const { loadingIcon: loadingIconMeasure } = theme.gate.measures.guestLayout;
    const [loading, setLoading] = useState(false);
    return (
        <ThemeProvider theme={theme}>
            <PackContext
                loadingDispatch={setLoading}
                type='register-gate'
            >
                <RegisterFields value={window.data?.register?.fields}>
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
                            textKey='new-account'
                            marginTop={headingMeasure.padding.top}
                            marginBottom={headingMeasure.padding.bottom}
                        />
                        <Form />
                    </GuestLayout>
                </RegisterFields>
            </PackContext>
        </ThemeProvider>
    );
};
