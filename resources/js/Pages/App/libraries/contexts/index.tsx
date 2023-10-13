import { ReducerSelections } from '@/Pages/App/libraries/types/state';
import { TokenRequest, Translate, TranslateData } from '@/libraries';
import { ComponentProps, ReactNode } from 'react';
import { Loading } from './Loading';
import { Locale } from './Locale';
import { Selections } from './Selections';
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
    selections: ReducerSelections;
    title: string;
    statusloading: ComponentProps<typeof Loading>['value'];
    children: ReactNode;
};

export const WrapContexts = ({
    selections,
    title = '',
    children,
    statusloading,
}: WrapContextsProps) => {
    return (
        <Loading value={statusloading}>
            <Locale value={locale}>
                <Title value={title}>
                    <TokenRequest value={info.tokenRequest}>
                        <Selections value={selections}>
                            <Translate value={info.translate}>
                                {children}
                            </Translate>
                        </Selections>
                    </TokenRequest>
                </Title>
            </Locale>
        </Loading>
    );
};

export { LoadingContext } from './Loading';
export { LocaleContext } from './Locale';
export { SelectionsContext } from './Selections';
export { TitleContext } from './Title';
