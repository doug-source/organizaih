import { Configuration } from '../../..';
import { LogoutLinkSt_, RightItemsContainer_ } from './styling';

export const RightItems = () => {
    return (
        <RightItemsContainer_>
            <Configuration />
            <LogoutLinkSt_ />
        </RightItemsContainer_>
    );
};
