import { firstUpperCase } from '@/libraries';
import { useCallback } from 'react';

export type translateFn = (key: string, capitalize?: boolean) => string;

export type TranslateData = Record<string, Record<string, string> | undefined>;

export const useTranslateToContext = (
    data: TranslateData,
    locale: string,
): translateFn =>
    useCallback(
        function (key, capitalize = false): string {
            const str: string | undefined = (data[locale] ?? {})[key];
            if (capitalize) {
                return str ? firstUpperCase(str) : key;
            }
            return str || key;
        },
        [data, locale],
    );
