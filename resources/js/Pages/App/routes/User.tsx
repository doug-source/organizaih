import { UserDetails } from '@/Pages/App/Screens/User/Details';
import { UserList } from '@/Pages/App/Screens/User/List';
import { Outlet, Route, Routes } from 'react-router-dom';
import { Container_ } from './styling';

export const UserRoutes = () => {
    return (
        <Routes>
            <Route
                path='/users'
                element={
                    <Container_>
                        <UserList />
                    </Container_>
                }
            />
            <Route
                path='/users/:id'
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
