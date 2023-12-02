import { AnonymousDetailsIcon } from '@/Pages/App/Components/AnonymousDetailsIcon';
import { DefineItem } from '@/Pages/App/Components/DefineItem';
import { DetailsContainer } from '@/Pages/App/Components/DetailsContainer';
import { ProfilePhotoOutput } from '@/Pages/App/Components/ProfilePhotoOutput';
import {
    useUserDetailsRequest,
    useUserDetailsResponse,
} from '@/Pages/App/Screens/Profile/Details/libraries/hooks';
import { useInitPage } from '@/Pages/App/libraries/hooks';
import { useTranslate } from '@/libraries/hooks';

const Details = () => {
    const translate = useTranslate();
    useInitPage('profile-show-title');
    const [store] = useUserDetailsRequest();
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
        </DetailsContainer>
    );
};

export { Details as ProfileDetails };
