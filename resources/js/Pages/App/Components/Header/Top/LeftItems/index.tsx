import { BrandItem } from '@/Pages/App/Components/BrandItem';
import { useTitle, useUserPhoto } from '@/Pages/App/libraries';
import { Outlet, Route, Routes } from 'react-router-dom';
import { Heading2_, TitleSpan_ } from './styling';

export const LeftItems = () => {
    const title = useTitle();
    const userPhoto = useUserPhoto();
    return (
        <Heading2_ $hasPhoto={Boolean(userPhoto)}>
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
