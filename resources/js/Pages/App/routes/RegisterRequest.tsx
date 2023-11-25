import { RegisterRequestDetails } from '@/Pages/App/Screens/RegisterRequest/Details';
import { RegisterRequests } from '@/Pages/App/Screens/RegisterRequest/List';
import { navigations } from '@/settings';
import { Outlet, Route, Routes } from 'react-router-dom';
import { Container_ } from './styling';

export const RegisterRequestRoutes = () => {
    return (
        <Routes>
            <Route
                path={navigations.registerRequest.list}
                element={
                    <Container_>
                        <RegisterRequests />
                    </Container_>
                }
            />
            <Route
                path={navigations.registerRequest.show()}
                element={
                    <Container_>
                        <RegisterRequestDetails />
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
