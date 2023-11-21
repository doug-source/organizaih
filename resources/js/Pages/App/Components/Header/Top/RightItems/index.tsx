import {
    LogoutLinkSt_,
    RightItemsContainer_,
} from '@/Pages/App/Components/Header/Top/RightItems/styling';
import { AbilitiesEnum } from '@/Pages/App/libraries/enums';
import { ConfigIconAsync } from '@/Pages/App/libraries/toolbox/Asynchronous';
import { hasAbility } from '@/Pages/App/settings';
import { Suspense } from 'react';

const hasSettings = hasAbility(AbilitiesEnum.SETTINGS);

export const RightItems = () => {
    return (
        <RightItemsContainer_>
            {hasSettings && (
                <Suspense>
                    <ConfigIconAsync />
                </Suspense>
            )}
            <LogoutLinkSt_ />
        </RightItemsContainer_>
    );
};
