import {
    AuthStatusServer,
    TokenRequest,
    Translate,
    TranslateData,
} from '@/libraries';
import { ReactNode } from 'react';

const data = window.data;
const $html = document.head.parentElement!;
const locale = ($html.getAttribute('lang') || 'pt-BR').replace('-', '_');
const $meta: HTMLMetaElement | null = document.head.querySelector(
    'meta[name="csrf-token"]',
);

type WrapContextsProps = {
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

export const WrapContexts = ({ children }: WrapContextsProps) => {
    return (
        <AuthStatusServer value={info.authStatusServer}>
            <TokenRequest value={info.tokenRequest}>
                <Translate value={info.translate}>{children}</Translate>
            </TokenRequest>
        </AuthStatusServer>
    );
};
