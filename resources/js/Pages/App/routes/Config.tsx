import { Config } from '@/Pages/App/Screens/Config';
import { ProfileDetails } from '@/Pages/App/Screens/Profile/Details';
import { ProfileEdition } from '@/Pages/App/Screens/Profile/Edition';
import { navigations } from '@/settings';
import { Outlet, Route, Routes } from 'react-router-dom';
import { Container_ } from './styling';

export const ConfigRoutes = () => {
    return (
        <Routes>
            <Route
                path={navigations.configuration.index}
                element={
                    <Container_>
                        <Config />
                    </Container_>
                }
            />
            <Route
                path={navigations.configuration.profile.show}
                element={
                    <Container_>
                        <ProfileDetails />
                    </Container_>
                }
            />
            <Route
                path={navigations.configuration.profile.edit}
                element={
                    <Container_>
                        <ProfileEdition />
                    </Container_>
                }
            />
            <Route
                path='*'
                element={<Outlet />}
            />
        </Routes>
    );
};
