import { useTranslate } from '@/libraries/hooks';
import { Heading_ } from '@/Pages/Gate/Register/Components/Heading/styling';

export const Heading = () => {
    const translate = useTranslate();
    return <Heading_>{translate('new-account', true)}</Heading_>;
};
