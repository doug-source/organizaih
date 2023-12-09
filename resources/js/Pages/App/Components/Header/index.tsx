import { Header_, Nav_, NavBar_ } from '@/Pages/App/Components/Header/styling';
import { HeaderTop } from '@/Pages/App/Components/HeaderTop';
import { AbilitiesEnum } from '@/Pages/App/libraries/enums';
import { useToggleSecondWord } from '@/Pages/App/libraries/hooks';
import { DashboardAsync } from '@/Pages/App/libraries/toolbox/Asynchronous';
import { hasAbility } from '@/Pages/App/settings';
import { Suspense } from 'react';
import { useLocation } from 'react-router-dom';

const hasMenu = hasAbility(AbilitiesEnum.MENU);

export const Header = () => {
    const { pathname } = useLocation();
    const [headerClass, toggleHeaderClass] = useToggleSecondWord('closed');
    return (
        <Header_ className={headerClass}>
            <Nav_>
                <NavBar_ className={pathname === '/' ? 'dashboard' : ''}>
                    <HeaderTop onTopWrappped={() => toggleHeaderClass()} />
                    {hasMenu && (
                        <Suspense>
                            <DashboardAsync />
                        </Suspense>
                    )}
                </NavBar_>
            </Nav_>
        </Header_>
    );
};

export * from './styling';
