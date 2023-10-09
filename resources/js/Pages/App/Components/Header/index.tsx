import { useLocation } from 'react-router-dom';
import { useToggleSecondWord } from '../../libraries';
import { Dashboard } from './Dashboard';
import { Header_, Nav_, NavBar_ } from './styling';
import { Top } from './Top';

export const Header = () => {
    const { pathname } = useLocation();
    const [headerClass, toggleHeaderClass] = useToggleSecondWord('closed');
    return (
        <Header_ className={headerClass}>
            <Nav_>
                <NavBar_ className={pathname === '/' ? 'dashboard' : ''}>
                    <Top onTopWrappped={() => toggleHeaderClass()} />
                    <Dashboard />
                </NavBar_>
            </Nav_>
        </Header_>
    );
};

export * from './Dashboard';
export * from './Top';

export * from './styling';
