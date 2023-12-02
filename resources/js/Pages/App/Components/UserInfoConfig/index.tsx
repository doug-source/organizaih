import {
    BarItems_,
    DetailsIcon_,
    NavLink_,
} from '@/Pages/App/Components/UserInfoConfig/styling';
import { navigations } from '@/settings';

export const UserInfoConfig = () => (
    <BarItems_>
        <NavLink_ to={navigations.configuration.profile.show}>
            <DetailsIcon_ />
            <span>Detalhes</span>
        </NavLink_>
    </BarItems_>
);
