import { UserDetailsPack } from '@/Pages/App/Components/UserDetailsPack';
import {
    useUserDetailsRequest,
    useUserDetailsResponse,
} from '@/Pages/App/Screens/Profile/Details/libraries/hooks';
import { useInitPage } from '@/Pages/App/libraries/hooks';

const Details = () => {
    useInitPage('profile-show-title');
    const [store] = useUserDetailsRequest();
    const [user] = useUserDetailsResponse(store);

    if (store.error || !user) {
        return null;
    }
    return <UserDetailsPack user={user} />;
};

export { Details as ProfileDetails };
