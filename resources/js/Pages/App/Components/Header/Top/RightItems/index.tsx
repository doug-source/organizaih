import {
    LogoutLinkSt_,
    RightItemsContainer_,
} from '@/Pages/App/Components/Header/Top/RightItems/styling';
import { AbilitiesEnum } from '@/Pages/App/libraries/enums';
import { ConfigIconAsync } from '@/Pages/App/libraries/toolbox/Asynchronous';
import { hasAbility } from '@/Pages/App/settings';
import { Suspense } from 'react';

const hasSettings = hasAbility(AbilitiesEnum.SETTINGS);
const hasLogout = hasAbility(AbilitiesEnum.LOGOUT);

export const RightItems = () => {
    return (
        <RightItemsContainer_>
            {hasSettings && (
                <Suspense>
                    <ConfigIconAsync url={window.data.userPhoto} />
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
