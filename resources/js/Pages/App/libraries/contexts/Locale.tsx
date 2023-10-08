import { ReactElement, createContext, useRef } from 'react';

const locales = Object.values(
    ((window as any).data as { locales: Array<string> }).locales || [],
);

export const LocaleContext = createContext<[string, string[]] | null>(null);

type LocaleProps = {
    value: string;
    children?: ReactElement | null;
};

export const Locale = ({ value = '', children }: LocaleProps) => {
    const locale = value;
    const localeRef = useRef<[string, string[]]>([locale, locales]);
    return (
        <LocaleContext.Provider value={localeRef.current}>
            {children}
        </LocaleContext.Provider>
    );
};
