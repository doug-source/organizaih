import { GuestLayout } from '@/Pages/Gate/Components/GuestLayout';
import { HeadingForm } from '@/Pages/Gate/Components/HeadingForm';
import { Form } from '@/Pages/Gate/ForgotPassword/Components/Form';
import { GlobalStyle } from '@/Pages/Gate/ForgotPassword/styling';
import { PackContext } from '@/Pages/Gate/libraries/PackContext';
import { Theme } from '@/settings/Theme';
import { ThemeProvider } from 'styled-components';

export const ForgotPassword = () => {
    const theme = window.data.themeKey === 'light' ? Theme.light : Theme.dark;
    const headingMeasure = theme.forgotPass.measures.heading;
    return (
        <ThemeProvider theme={theme}>
            <PackContext
                loadingDispatch={null}
                type='forgot-password'
            >
                <GlobalStyle />
                <GuestLayout>
                    <HeadingForm
                        textKey='reset-password'
                        marginTop={headingMeasure.padding.top}
                        marginBottom={headingMeasure.padding.bottom}
                    />
                    <Form />
                </GuestLayout>
            </PackContext>
        </ThemeProvider>
    );
};
