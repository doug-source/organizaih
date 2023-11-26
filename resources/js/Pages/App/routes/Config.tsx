import { Config } from '@/Pages/App/Screens/Config';
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
                path='*'
                element={<Outlet />}
            />
        </Routes>
    );
};
