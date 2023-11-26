import {
    InventoryDetails,
    InventoryForm,
    InventoryList,
} from '@/Pages/App/Screens/Inventory';
import { navigations } from '@/settings';
import { Outlet, Route, Routes } from 'react-router-dom';
import { Container_ } from './styling';

export const InventoryRoutes = () => {
    return (
        <Routes>
            <Route
                path={navigations.inventory.list}
                element={
                    <Container_>
                        <InventoryList />
                    </Container_>
                }
            />
            <Route
                path={navigations.inventory.create}
                element={
                    <Container_>
                        <InventoryForm />
                    </Container_>
                }
            />
            <Route
                path={navigations.inventory.show()}
                element={
                    <Container_>
                        <InventoryDetails />
                    </Container_>
                }
            />
            <Route
                path={navigations.inventory.edit()}
                element={
                    <Container_>
                        <InventoryForm />
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
