import { TranslateData, translateFn, useTranslate } from '@/libraries/hooks';
import { ReactNode, createContext } from 'react';

export const TranslateContext = createContext<translateFn | null>(null);

type TranslateProps = {
    value: { data: TranslateData; locale: string };
    children?: ReactNode;
};

export const Translate = ({ value, children }: TranslateProps) => {
    const { data = {}, locale = 'pt-BR' } = value;
    const translate: translateFn = useTranslate(data, locale);
    return (
        <TranslateContext.Provider value={translate}>
            {children}
        </TranslateContext.Provider>
    );
};
