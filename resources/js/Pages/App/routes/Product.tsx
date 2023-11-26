import {
    ProductDetails,
    ProductForm,
    ProductList,
} from '@/Pages/App/Screens/Product';
import { navigations } from '@/settings';
import { Outlet, Route, Routes } from 'react-router-dom';
import { Container_ } from './styling';

export const ProductRoutes = () => {
    return (
        <Routes>
            <Route
                path={navigations.product.list}
                element={
                    <Container_>
                        <ProductList />
                    </Container_>
                }
            />
            <Route
                path={navigations.product.create}
                element={
                    <Container_>
                        <ProductForm />
                    </Container_>
                }
            />
            <Route
                path={navigations.product.edit()}
                element={
                    <Container_>
                        <ProductForm />
                    </Container_>
                }
            />
            <Route
                path={navigations.product.show()}
                element={
                    <Container_>
                        <ProductDetails />
                    </Container_>
                }
            />
            <Route
                path={navigations.product.select}
                element={
                    <Container_>
                        <ProductList />
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
