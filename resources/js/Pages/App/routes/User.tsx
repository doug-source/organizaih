import { UserDetails } from '@/Pages/App/Screens/User/Details';
import { UserList } from '@/Pages/App/Screens/User/List';
import { navigations } from '@/settings';
import { Outlet, Route, Routes } from 'react-router-dom';
import { Container_ } from './styling';

export const UserRoutes = () => {
    return (
        <Routes>
            <Route
                path={navigations.user.list}
                element={
                    <Container_>
                        <UserList />
                    </Container_>
                }
            />
            <Route
                path={navigations.user.show()}
                element={
                    <Container_>
                        <UserDetails />
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
