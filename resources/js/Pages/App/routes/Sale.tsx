import { SaleDetails, SaleForm, SaleList } from '@/Pages/App/Screens/Sales';
import { Container_ } from '@/Pages/App/routes/styling';
import { navigations } from '@/settings';
import { Outlet, Route, Routes } from 'react-router-dom';

export const SaleRoutes = () => {
    return (
        <Routes>
            <Route
                path={navigations.sale.list}
                element={
                    <Container_>
                        <SaleList />
                    </Container_>
                }
            />
            <Route
                path={navigations.sale.create}
                element={
                    <Container_>
                        <SaleForm />
                    </Container_>
                }
            />
            <Route
                path={navigations.sale.show()}
                element={
                    <Container_>
                        <SaleDetails />
                    </Container_>
                }
            />
            <Route
                path={navigations.sale.edit()}
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
