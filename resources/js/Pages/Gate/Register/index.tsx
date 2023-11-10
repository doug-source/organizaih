import { LoadingIcon } from '@/Components/LoadingIcon';
import { GuestLayout } from '@/Pages/Gate/Components/GuestLayout';
import { HeadingForm } from '@/Pages/Gate/Components/HeadingForm';
import { Form } from '@/Pages/Gate/Register/Components/Form';
import { GlobalStyle } from '@/Pages/Gate/Register/styling';
import { PackContext } from '@/Pages/Gate/libraries/PackContext';
import { Theme } from '@/settings/Theme';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

export const Register = () => {
    const theme = window.data.themeKey === 'light' ? Theme.light : Theme.dark;
    const headingMeasure = theme.register.measures.heading;
    const [loading, setLoading] = useState(false);
    return (
        <ThemeProvider theme={theme}>
            <PackContext
                loadingDispatch={setLoading}
                type='register-gate'
                fields={window.data?.register?.fields}
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
                    <HeadingForm
                        textKey='new-account'
                        marginTop={headingMeasure.padding.top}
                        marginBottom={headingMeasure.padding.bottom}
                    />
                    <Form />
                </GuestLayout>
            </PackContext>
        </ThemeProvider>
    );
};
