import { TokenRequest, Translate, TranslateData } from '@/libraries';
import { ReactNode } from 'react';

const data = window.data;
const $html = document.head.parentElement!;
const locale = ($html.getAttribute('lang') || 'pt-BR').replace('-', '_');
const $meta: HTMLMetaElement | null = document.head.querySelector(
    'meta[name="csrf-token"]',
);
const tokenRequest = $meta?.content ?? '';

type WrapContextsProps = {
    children: ReactNode;
};
const info = {
    translate: {
        data: data as unknown as TranslateData,
        locale,
    },
    tokenRequest,
};

export const WrapContexts = ({ children }: WrapContextsProps) => {
    return (
        <TokenRequest value={info.tokenRequest}>
            <Translate value={info.translate}>{children}</Translate>
        </TokenRequest>
    );
};
