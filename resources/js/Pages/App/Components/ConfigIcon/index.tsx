import { NavLink_ } from '@/Pages/App/Components/ConfigIcon/styling';
import { DataReducerEnum } from '@/Pages/App/libraries/enums/data';
import { useAppDispatch } from '@/Pages/App/libraries/hooks/Contexts';
import { UserIcon } from '@/Pages/App/libraries/icons/asynchronous';
import { emptySpaceCharacter } from '@/Pages/App/libraries/plain';
import { Suspense } from 'react';
import { useLocation } from 'react-router-dom';

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
                    payload: emptySpaceCharacter,
                });
            }}
        >
            <Suspense>
                <UserIcon />
            </Suspense>
        </NavLink_>
    );
};
