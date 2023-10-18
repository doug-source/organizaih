import {
    ProductCategoryCreate,
    ProductCategoryEdit,
    ProductCategoryList,
} from '@/Pages/App/Screens/ProductCategory';
import { Outlet, Route, Routes } from 'react-router-dom';
import { Container_ } from './styling';

export const ProductCategoryRoutes = () => {
    return (
        <Routes>
            <Route
                path='/product-categories'
                element={
                    <Container_>
                        <ProductCategoryList />
                    </Container_>
                }
            />
            <Route
                path='/product-categories/create'
                element={
                    <Container_>
                        <ProductCategoryCreate />
                    </Container_>
                }
            />
            <Route
                path='/product-categories/:id/edit'
                element={
                    <Container_>
                        <ProductCategoryEdit />
                    </Container_>
                }
            />
            <Route
                path='/product-categories/select/:target'
                element={
                    <Container_>
                        <ProductCategoryList />
                    </Container_>
                }
            />
            {/* <Route
                path='/product-categories/:id'
                element={
                    <Container_>
                        <ProductCategoryDetails />
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
