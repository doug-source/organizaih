import {
    Form as CustomerForm,
    List as CustomerList,
} from '@/Pages/App/Screens/Customer';
import { ContainerCustomer_ } from '@/Pages/App/routes/Customer/styling';
import { Outlet, Route, Routes } from 'react-router-dom';
// import {
// List as CustomerList,
// Details as CustomerDetails,
// Form as CustomerForm,
// } from '../../components/Customer';

export const CustomerRoutes = () => {
    return (
        <Routes>
            <Route
                path='/customers'
                element={
                    <ContainerCustomer_>
                        <CustomerList />
                    </ContainerCustomer_>
                }
            />
            {/* <Route
                path='/customers/select/:target'
                element={
                    <ContainerCustomer_>
                        <CustomerList />
                    </ContainerCustomer_>
                }
            /> */}
            <Route
                path='/customers/create'
                element={
                    <ContainerCustomer_>
                        <CustomerForm />
                    </ContainerCustomer_>
                }
            />
            {/*
            <Route
                path='/customers/:id'
                element={
                    <ContainerCustomer_>
                        <CustomerDetails />
                    </ContainerCustomer_>
                }
            /> */}
            <Route
                path='/customers/:id/edit'
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
