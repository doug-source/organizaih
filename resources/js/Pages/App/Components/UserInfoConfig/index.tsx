import {
    BarItems_,
    DetailsIcon_,
    NavLink_,
} from '@/Pages/App/Components/UserInfoConfig/styling';
import { useTranslate } from '@/libraries/hooks';
import { navigations } from '@/settings';

export const UserInfoConfig = () => {
    const translate = useTranslate();
    return (
        <BarItems_>
            <NavLink_ to={navigations.configuration.profile.show}>
                <DetailsIcon_ />
                <span>{translate('details', true)}</span>
            </NavLink_>
        </BarItems_>
    );
};
