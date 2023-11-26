import {
    CustomerDetails,
    CustomerForm,
    CustomerList,
} from '@/Pages/App/Screens/Customer';
import { ContainerCustomer_ } from '@/Pages/App/routes/Customer/styling';
import { navigations } from '@/settings';
import { Outlet, Route, Routes } from 'react-router-dom';

export const CustomerRoutes = () => {
    return (
        <Routes>
            <Route
                path={navigations.customer.list}
                element={
                    <ContainerCustomer_>
                        <CustomerList />
                    </ContainerCustomer_>
                }
            />
            <Route
                path={navigations.customer.select}
                element={
                    <ContainerCustomer_>
                        <CustomerList />
                    </ContainerCustomer_>
                }
            />
            <Route
                path={navigations.customer.create}
                element={
                    <ContainerCustomer_>
                        <CustomerForm />
                    </ContainerCustomer_>
                }
            />
            <Route
                path={navigations.customer.show()}
                element={
                    <ContainerCustomer_>
                        <CustomerDetails />
                    </ContainerCustomer_>
                }
            />
            <Route
                path={navigations.customer.edit}
                element={
                    <ContainerCustomer_>
                        <CustomerForm />
                    </ContainerCustomer_>
                }
            />
            <Route
                path='*'
                element={<Outlet />}
            />
        </Routes>
    );
};
