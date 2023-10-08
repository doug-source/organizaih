import { GuestLayout } from '@/Auth';
import { Theme } from '@/settings';
import { ThemeProvider } from 'styled-components';
import { Form } from './Form';
import { WrapContexts } from './WrapContexts';
import { GlobalStyle } from './styling';

export const Login = () => {
    // const theme = window.data.themeKey === 'light' ? Theme.light : Theme.dark;
    const theme = Theme.dark;
    return (
        <ThemeProvider theme={theme}>
            <WrapContexts>
                <GlobalStyle />
                <GuestLayout>
                    <Form />
                </GuestLayout>
            </WrapContexts>
        </ThemeProvider>
    );
};
