import { LoadingDispatch } from '@/Pages/libraries/contexts';
import { AuthStatusServer } from '@/Pages/libraries/contexts/AuthStatusServer';
import { TokenRequest, Translate } from '@/libraries';
import { TranslateData } from '@/libraries/hooks';
import { ComponentPropsWithoutRef, ReactNode } from 'react';

const data = window.data;
const $html = document.head.parentElement!;
const locale = ($html.getAttribute('lang') || 'pt-BR').replace('-', '_');
const $meta: HTMLMetaElement | null = document.head.querySelector(
    'meta[name="csrf-token"]',
);

type PackContextProps = {
    loadingDispatch: ComponentPropsWithoutRef<typeof LoadingDispatch>['value'];
    children: ReactNode;
};
const info = {
    translate: {
        data: data as unknown as TranslateData,
        locale,
    },
    tokenRequest: $meta?.content ?? '',
    authStatusServer: data.auth.status,
};

export const PackContext = ({
    loadingDispatch,
    children,
}: PackContextProps) => {
    return (
        <LoadingDispatch value={loadingDispatch}>
            <AuthStatusServer value={info.authStatusServer}>
                <TokenRequest value={info.tokenRequest}>
                    <Translate value={info.translate}>{children}</Translate>
                </TokenRequest>
            </AuthStatusServer>
        </LoadingDispatch>
    );
};
