import {
    TokenRequestContext,
    TranslateContext,
    makeContextError,
} from '@/libraries';
import { useContext } from 'react';

export const useTranslate = () => {
    const translate = useContext(TranslateContext);
    if (translate === null) {
        throw makeContextError('useTranslate', 'TranslateContext');
    }
    return translate;
};

export const useTokenRequest = () => {
    return useContext(TokenRequestContext);
};
