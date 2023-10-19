import { InventoryList } from '@/Pages/App/Screens/Inventory';
import { Outlet, Route, Routes } from 'react-router-dom';
import { Container_ } from './styling';

export const InventoryRoutes = () => {
    return (
        <Routes>
            <Route
                path='/inventories'
                element={
                    <Container_>
                        <InventoryList />
                    </Container_>
                }
            />
            {/* <Route
                path='/inventories/:id'
                element={
                    <Container_>
                        <InventoryDetails />
                    </Container_>
                }
            />
            <Route
                path='/inventories/create'
                element={
                    <Container_>
                        <InventoryForm />
                    </Container_>
                }
            />
            <Route
                path='/inventories/:id/edit'
                element={
                    <Container_>
                        <InventoryForm />
                    </Container_>
                }
            /> */}
            <Route
                path='*'
                element={<Outlet />}
            />
        </Routes>
    );
};
