import { useTranslate } from '@/libraries/hooks';

export const useTitleBuilt = () => {
    const translate = useTranslate();
    return `${translate('graph', true)}: ${translate(
        'menu-products',
        true,
    )} vs ${translate('menu-sale', true)} (${translate('qty')})`;
};
