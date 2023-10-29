import { SaleDetails, SaleForm, SaleList } from '@/Pages/App/Screens/Sales';
import { Container_ } from '@/Pages/App/routes/styling';
import { Outlet, Route, Routes } from 'react-router-dom';
// , SaleDetails

export const SaleRoutes = () => {
    return (
        <Routes>
            <Route
                path='/sales'
                element={
                    <Container_>
                        <SaleList />
                    </Container_>
                }
            />
            <Route
                path='/sales/create'
                element={
                    <Container_>
                        <SaleForm />
                    </Container_>
                }
            />
            <Route
                path='/sales/:id'
                element={
                    <Container_>
                        <SaleDetails />
                    </Container_>
                }
            />
            <Route
                path='/sales/:id/edit'
                element={
                    <Container_>
                        <SaleForm />
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
