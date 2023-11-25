import { DefineItem } from '@/Pages/App/Components/DefineItem';
import { DetailsContainer } from '@/Pages/App/Components/DetailsContainer';
import { detachContainerMeasure } from '@/Pages/App/Screens/RegisterRequest/Details/libraries';
import {
    useRegisterRequestDetailsRequest,
    useRegisterRequestDetailsResponse,
} from '@/Pages/App/Screens/RegisterRequest/Details/libraries/hooks';
import { useInitPage, useLocale } from '@/Pages/App/libraries/hooks';
import { formatDateByLocale, useTranslate } from '@/libraries';
import { useParams } from 'react-router-dom';
import { useTheme } from 'styled-components';

const Details = () => {
    const translate = useTranslate();
    const { id } = useParams();
    const [store] = useRegisterRequestDetailsRequest(Number(id));
    useInitPage('register-request-show-title');
    const [locale] = useLocale();
    const [registerRequest] = useRegisterRequestDetailsResponse(store);
    const containerMeasure = detachContainerMeasure(useTheme());

    if (store.error || !registerRequest) {
        return null;
    }
    return (
        <DetailsContainer gapItems={containerMeasure.gap}>
            <DefineItem
                labelText={translate('Email', true) + ':'}
                value={registerRequest.email}
                childrenSimilar
            />
            <DefineItem
                labelText={translate('phone', true) + ':'}
                value={registerRequest.phone ?? '---'}
            />
            <DefineItem
                labelText={translate('registered-in', true) + ':'}
                value={
                    formatDateByLocale(
                        locale.replace('_', '-'),
                        registerRequest.created_at ?? undefined,
                    ) ?? '---'
                }
            />
        </DetailsContainer>
    );
};

export { Details as RegisterRequestDetails };
