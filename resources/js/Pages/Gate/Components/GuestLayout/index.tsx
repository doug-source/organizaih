import { ReactNode, Suspense } from 'react';
import { Container_, GateIcon_, LoginIconLink_, Main_ } from './styling';

type GuestLayoutProps = {
    loading?: ReactNode;
    children?: ReactNode;
};

export const GuestLayout = ({ loading, children }: GuestLayoutProps) => {
    return (
        <Container_>
            <div>
                <LoginIconLink_ href='/'>
                    {loading}
                    <Suspense>
                        <GateIcon_ />
                    </Suspense>
                </LoginIconLink_>
                <Main_>{children}</Main_>
            </div>
        </Container_>
    );
};
