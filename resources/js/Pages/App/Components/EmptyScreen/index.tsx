import { useInitPage } from '@/Pages/App/libraries/hooks';
import { Outlet } from 'react-router-dom';

export const EmptyScreen = () => {
    useInitPage('dashboard', false);
    return <Outlet />;
};
