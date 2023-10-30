import { GraphMenu } from '@/Pages/App/Screens/Graph/Menu';
import { Suspense } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import { Container_ } from './styling';
// import {
//     GraphProductsSalesAsync as GraphProductsSales,
//     GraphCustomersSalesAsync as GraphCustomersSales,
// } from '../../../library/toolbox/asynchronous';

export const GraphRoutes = () => {
    return (
        <Routes>
            <Route
                path='/graphs'
                element={
                    <Suspense>
                        <Container_>
                            <GraphMenu />
                        </Container_>
                    </Suspense>
                }
            />
            {/* <Route
                path='/graph-products-sales-qty'
                element={
                    <Suspense>
                        <Container_>
                            <GraphProductsSales />
                        </Container_>
                    </Suspense>
                }
            />
            <Route
                path='/graph-customers-sales-qty'
                element={
                    <Suspense>
                        <Container_>
                            <GraphCustomersSales />
                        </Container_>
                    </Suspense>
                }
            /> */}
            <Route
                path='*'
                element={<Outlet />}
            />
        </Routes>
    );
};
