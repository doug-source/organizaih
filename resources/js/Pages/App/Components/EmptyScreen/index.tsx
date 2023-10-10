import { useInitPage } from '@/libraries';
import { Outlet } from 'react-router-dom';

export const EmptyScreen = () => {
    useInitPage('dashboard', false);
    return <Outlet />;
};
