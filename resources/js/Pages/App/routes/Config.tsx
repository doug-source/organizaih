import { Config } from '@/Pages/App/Screens';
import { Outlet, Route, Routes } from 'react-router-dom';
import { Container_ } from './styling';

export const ConfigRoutes = () => {
    return (
        <Routes>
            <Route
                path='/configuration'
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
