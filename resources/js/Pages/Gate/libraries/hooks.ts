import { TranslateData } from '@/libraries/hooks';
import { useEffect, useState } from 'react';

type InfoScheme = {
    translate: {
        data: TranslateData;
        locale: string;
    };
    tokenRequest: string;
    populated: boolean;
};

const emptyInfo: InfoScheme = {
    translate: { data: {}, locale: '' },
    tokenRequest: '',
    populated: false,
};

const data = { ...window.data };

export const useWindowDataInfo = () => {
    const { head } = document;
    const { parentElement: $htmlTag } = head;
    const [info, setInfo] = useState<InfoScheme>(emptyInfo);
    useEffect(() => {
        if (!$htmlTag || info.populated) {
            return;
        }
        const localeRaw = $htmlTag.getAttribute('lang') ?? 'pt-BR';
        const locale = localeRaw.replace('-', '_');
        const $meta: HTMLMetaElement | null = head.querySelector(
            'meta[name="csrf-token"]',
        );
        setInfo({
            translate: {
                data: data as unknown as TranslateData,
                locale,
            },
            tokenRequest: $meta?.content ?? '',
            populated: true,
        });
    }, [$htmlTag, info, setInfo, head]);
    return [info] as const;
};
