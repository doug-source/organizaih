import { ReactNode, Suspense } from 'react';
import { Container_, LoginIconLink_, LoginIcon_, Main_ } from './styling';

type GuestLayoutProps = {
    children: ReactNode;
};

export const GuestLayout = ({ children }: GuestLayoutProps) => {
    return (
        <Container_>
            <div>
                <LoginIconLink_ href='/'>
                    <Suspense>
                        <LoginIcon_ />
                    </Suspense>
                </LoginIconLink_>
                <Main_>{children}</Main_>
            </div>
        </Container_>
    );
};
