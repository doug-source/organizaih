import { TokenRequest, Translate, TranslateData } from '@/libraries';
import { ComponentProps, ReactNode } from 'react';
import { Loading } from './Loading';
import { Locale } from './Locale';
import { Title } from './Title';

const data = window.data;
const $html = document.head.parentElement!;
const locale = ($html.getAttribute('lang') || 'pt-BR').replace('-', '_');
const $meta: HTMLMetaElement = document.head.querySelector(
    'meta[name="csrf-token"]',
)!;
const info = {
    translate: {
        data: data as unknown as TranslateData,
        locale,
    },
    tokenRequest: $meta.content || '',
};

type WrapContextsProps = {
    title: string;
    statusloading: ComponentProps<typeof Loading>['value'];
    children: ReactNode;
};

export const WrapContexts = ({
    title = '',
    children,
    statusloading,
}: WrapContextsProps) => {
    return (
        <Loading value={statusloading}>
            <Locale value={locale}>
                <Title value={title}>
                    <TokenRequest value={info.tokenRequest}>
                        <Translate value={info.translate}>{children}</Translate>
                    </TokenRequest>
                </Title>
            </Locale>
        </Loading>
    );
};
