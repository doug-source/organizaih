import { detachStatusServer } from '@/Pages/Gate/libraries';
import { LoadingDispatch, StatusServer } from '@/Pages/Gate/libraries/contexts';
import { RegisterFields } from '@/Pages/Gate/libraries/contexts/RegisterFields';
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
    fields: ComponentPropsWithoutRef<typeof RegisterFields>['value'];
    type: Parameters<typeof detachStatusServer>[1];
    children: ReactNode;
};
const info = {
    translate: {
        data: data as unknown as TranslateData,
        locale,
    },
    tokenRequest: $meta?.content ?? '',
};

export const PackContext = ({
    loadingDispatch,
    fields,
    type,
    children,
}: PackContextProps) => {
    const statusServer = detachStatusServer(window.data, type);
    return (
        <LoadingDispatch value={loadingDispatch}>
            <StatusServer value={statusServer}>
                <RegisterFields value={fields}>
                    <TokenRequest value={info.tokenRequest}>
                        <Translate value={info.translate}>{children}</Translate>
                    </TokenRequest>
                </RegisterFields>
            </StatusServer>
        </LoadingDispatch>
    );
};
