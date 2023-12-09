import { GraphMenu } from '@/Pages/App/Screens/Graph/Menu';
import {
    GraphCustomersSalesAsync as GraphCustomersSales,
    GraphProductsSalesAsync as GraphProductsSales,
} from '@/Pages/App/libraries/toolbox/Asynchronous';
import { navigations } from '@/settings';
import { Suspense } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import { Container_ } from './styling';

export const GraphRoutes = () => {
    return (
        <Routes>
            <Route
                path={navigations.graph.index}
                element={
                    <Container_>
                        <GraphMenu />
                    </Container_>
                }
            />
            <Route
                path={navigations.graph.qty.sales.products}
                element={
                    <Container_>
                        <Suspense>
                            <GraphProductsSales />
                        </Suspense>
                    </Container_>
                }
            />
            <Route
                path={navigations.graph.qty.sales.customers}
                element={
                    <Container_>
                        <Suspense>
                            <GraphCustomersSales />
                        </Suspense>
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
