import { UserEditionPack } from '@/Pages/App/Components/UserEditionPack';
import {
    useUserRequest,
    useUserResponse,
} from '@/Pages/App/Screens/Profile/libraries/hooks';
import { useInitPage } from '@/Pages/App/libraries/hooks';

const Edition = () => {
    useInitPage('profile-edit-title');
    const [store] = useUserRequest();
    const [user] = useUserResponse(store);

    if (store.error || !user) {
        return null;
    }
    return <UserEditionPack user={user} />;
};

export { Edition as ProfileEdition };
