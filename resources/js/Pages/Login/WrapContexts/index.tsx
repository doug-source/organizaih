import { TokenRequest, Translate, TranslateData } from '@/libraries';
import { ComponentPropsWithoutRef, ReactNode } from 'react';
import { AuthStatusServer, LoadingDispatch } from '../libraries';

const data = window.data;
const $html = document.head.parentElement!;
const locale = ($html.getAttribute('lang') || 'pt-BR').replace('-', '_');
const $meta: HTMLMetaElement | null = document.head.querySelector(
    'meta[name="csrf-token"]',
);

type WrapContextsProps = {
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

export const WrapContexts = ({
    loadingDispatch,
    children,
}: WrapContextsProps) => {
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
