import { ProductForm, ProductList } from '@/Pages/App/Screens/Product';
import { Outlet, Route, Routes } from 'react-router-dom';
import { Container_ } from './styling';

export const ProductRoutes = () => {
    return (
        <Routes>
            <Route
                path='/products'
                element={
                    <Container_>
                        <ProductList />
                    </Container_>
                }
            />
            <Route
                path='/products/create'
                element={
                    <Container_>
                        <ProductForm />
                    </Container_>
                }
            />
            <Route
                path='/products/:id/edit'
                element={
                    <Container_>
                        <ProductForm />
                    </Container_>
                }
            />
            {/*
            <Route
                path='/products/:id'
                element={
                    <Container_>
                        <ProductDetails />
                    </Container_>
                }
            />
            <Route
                path='/products/select/:target'
                element={
                    <Container_>
                        <ProductList />
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
