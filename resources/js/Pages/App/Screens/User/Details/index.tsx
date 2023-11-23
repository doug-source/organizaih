import { AnonymousDetailsIcon } from '@/Pages/App/Components/AnonymousDetailsIcon';
import { DefineItem } from '@/Pages/App/Components/DefineItem';
import { DetailsContainer } from '@/Pages/App/Components/DetailsContainer';
import { ProfilePhotoOutput } from '@/Pages/App/Components/ProfilePhotoOutput';
import {
    useUserDetailsRequest,
    useUserDetailsResponse,
} from '@/Pages/App/Screens/User/Details/libraries';
import { useInitPage, useLocale } from '@/Pages/App/libraries/hooks';
import { formatDateByLocale, useTranslate } from '@/libraries';
import { useParams } from 'react-router-dom';

const Details = () => {
    const translate = useTranslate();
    const { id } = useParams();
    const [store] = useUserDetailsRequest(Number(id));
    useInitPage('user-show-title');
    const [locale] = useLocale();

    const [user] = useUserDetailsResponse(store);

    if (store.error || !user) {
        return null;
    }
    return (
        <DetailsContainer>
            <DefineItem
                labelText={translate('name', true) + ':'}
                value={user.name}
            >
                <ProfilePhotoOutput
                    url={null}
                    iconNoPhoto={<AnonymousDetailsIcon />}
                />
            </DefineItem>
            <DefineItem
                labelText={translate('Email', true) + ':'}
                value={user.email}
            />
            <DefineItem
                labelText={translate('registered-in', true) + ':'}
                value={
                    formatDateByLocale(
                        locale.replace('_', '-'),
                        user.created_at ?? undefined,
                    ) ?? '---'
                }
            />
            <DefineItem
                labelText={translate('user-email-verified-field', true) + ':'}
                value={
                    formatDateByLocale(
                        locale.replace('_', '-'),
                        user.email_verified_at ?? undefined,
                    ) ?? '---'
                }
            />
            <DefineItem
                labelText={translate('roles', true) + ':'}
                value={
                    user.roles.length === 0 ? (
                        translate('role-empty-list', true)
                    ) : (
                        <ul>
                            {user.roles.map((role) => (
                                <li>{role}</li>
                            ))}
                        </ul>
                    )
                }
            />
            <DefineItem
                labelText={translate('abilities', true) + ':'}
                value={
                    user.abilities.length === 0 ? (
                        translate('abilities-empty-list', true)
                    ) : (
                        <ul>
                            {user.abilities.map((ability) => (
                                <li>{ability}</li>
                            ))}
                        </ul>
                    )
                }
            />
        </DetailsContainer>
    );
};

export { Details as UserDetails };
