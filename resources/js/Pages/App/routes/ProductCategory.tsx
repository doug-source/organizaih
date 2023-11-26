import {
    ProductCategoryCreate,
    ProductCategoryDetails,
    ProductCategoryEdit,
    ProductCategoryList,
} from '@/Pages/App/Screens/ProductCategory';
import { navigations } from '@/settings';
import { Outlet, Route, Routes } from 'react-router-dom';
import { Container_ } from './styling';

export const ProductCategoryRoutes = () => {
    return (
        <Routes>
            <Route
                path={navigations.productCategory.list}
                element={
                    <Container_>
                        <ProductCategoryList />
                    </Container_>
                }
            />
            <Route
                path={navigations.productCategory.create}
                element={
                    <Container_>
                        <ProductCategoryCreate />
                    </Container_>
                }
            />
            <Route
                path={navigations.productCategory.edit()}
                element={
                    <Container_>
                        <ProductCategoryEdit />
                    </Container_>
                }
            />
            <Route
                path={navigations.productCategory.select}
                element={
                    <Container_>
                        <ProductCategoryList />
                    </Container_>
                }
            />
            <Route
                path={navigations.productCategory.show()}
                element={
                    <Container_>
                        <ProductCategoryDetails />
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
