import { BrandItem } from '@/Pages/App/Components/BrandItem';
import { useTitle } from '@/Pages/App/libraries';
import { Outlet, Route, Routes } from 'react-router-dom';
import { Heading2_, TitleSpan_ } from './styling';

export const LeftItems = () => {
    const title = useTitle();
    return (
        <Heading2_>
            <BrandItem />
            <Routes>
                <Route
                    path='/'
                    element={<Outlet />}
                />
                <Route
                    path='*'
                    element={<TitleSpan_>{title}</TitleSpan_>}
                />
            </Routes>
        </Heading2_>
    );
};
