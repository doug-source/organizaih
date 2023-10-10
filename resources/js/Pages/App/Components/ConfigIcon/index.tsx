import { Suspense } from 'react';
import { useLocation } from 'react-router-dom';
import { DataReducerEnum, UserIcon, useAppDispatch } from '../../libraries';
import { NavLink_ } from './styling';

type ConfigurationProps = {
    className?: string;
};

export const ConfigIcon = ({ className }: ConfigurationProps) => {
    const { pathname } = useLocation();
    const appDispatch = useAppDispatch();
    return (
        <NavLink_
            className={className}
            to='/configuration'
            onClick={() => {
                if (pathname === '/configuration' || !navigator.onLine) {
                    return;
                }
                appDispatch({
                    type: DataReducerEnum.TITLE,
                    payload: '\u{FEFF}',
                });
            }}
        >
            <Suspense>
                <UserIcon />
            </Suspense>
        </NavLink_>
    );
};
