import {
    LogoutLinkSt_,
    RightItemsContainer_,
} from '@/Pages/App/Components/HeaderTop/RightItems/styling';
import { AbilitiesEnum } from '@/Pages/App/libraries/enums';
import { useUserPhoto } from '@/Pages/App/libraries/hooks';
import { ConfigIconAsync } from '@/Pages/App/libraries/toolbox/Asynchronous';
import { hasAbility } from '@/Pages/App/settings';
import { Suspense } from 'react';

const hasSettings = hasAbility(AbilitiesEnum.SETTINGS);
const hasLogout = hasAbility(AbilitiesEnum.LOGOUT);

export const RightItems = () => {
    const userPhoto = useUserPhoto();
    return (
        <RightItemsContainer_>
            {hasSettings && (
                <Suspense>
                    <ConfigIconAsync url={userPhoto} />
                </Suspense>
            )}
            {hasLogout && (
                <Suspense>
                    <LogoutLinkSt_ />
                </Suspense>
            )}
        </RightItemsContainer_>
    );
};
