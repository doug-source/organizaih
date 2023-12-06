import { BrandItem } from '@/Pages/App/Components/BrandItem';
import {
    useTitle,
    useUserName,
    useUserPhoto,
} from '@/Pages/App/libraries/hooks/Contexts';
import { Route, Routes } from 'react-router-dom';
import { Heading2_, TitleSpan_ } from './styling';

export const LeftItems = () => {
    const title = useTitle();
    const userPhoto = useUserPhoto();
    const userName = useUserName();
    return (
        <Heading2_ $hasPhoto={Boolean(userPhoto)}>
            <BrandItem />
            <Routes>
                <Route
                    path='/'
                    element={<TitleSpan_>{userName}</TitleSpan_>}
                />
                <Route
                    path='*'
                    element={<TitleSpan_>{title}</TitleSpan_>}
                />
            </Routes>
        </Heading2_>
    );
};
