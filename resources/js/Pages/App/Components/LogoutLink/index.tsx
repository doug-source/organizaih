import { useTokenRequest } from '@/libraries';
import {
    ComponentPropsWithoutRef,
    MouseEvent as ReactMouseEvent,
    Suspense,
    useRef,
} from 'react';
import { ExitLink_, FormLogout_, LogoutIcon_ } from './styling';

type LogoutLinkProps = ComponentPropsWithoutRef<'form'> & {
    label?: string;
    className?: string;
};

export const LogoutLink = ({ label, className }: LogoutLinkProps) => {
    const tokenRequest = useTokenRequest();
    const formRef = useRef<HTMLFormElement>(null);
    return (
        <FormLogout_
            ref={formRef}
            className={className}
            action='/logout'
            method='POST'
        >
            <input
                type='hidden'
                name='_token'
                value={tokenRequest}
            />
            <input
                type='hidden'
                name='tokenAuthApi'
                value={window.data.tokenAuth}
            />
            <ExitLink_
                href='/logout'
                onClick={(
                    evt: ReactMouseEvent<HTMLAnchorElement, MouseEvent>,
                ) => {
                    evt.preventDefault();
                    if (formRef.current) {
                        formRef.current.submit();
                    }
                }}
            >
                <Suspense>
                    <LogoutIcon_ />
                </Suspense>
                {Boolean(label) && <div>{label}</div>}
            </ExitLink_>
        </FormLogout_>
    );
};

export * from './styling';
