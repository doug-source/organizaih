import { ConfigIcon } from '@/Pages/App/Components/ConfigIcon';
import {
    LogoutLinkSt_,
    RightItemsContainer_,
} from '@/Pages/App/Components/Header/Top/RightItems/styling';

export const RightItems = () => {
    return (
        <RightItemsContainer_>
            <ConfigIcon />
            <LogoutLinkSt_ />
        </RightItemsContainer_>
    );
};
