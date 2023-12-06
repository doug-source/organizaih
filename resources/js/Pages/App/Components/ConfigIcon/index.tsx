import { NavLink_ } from '@/Pages/App/Components/ConfigIcon/styling';
import { ProfilePhotoOutput } from '@/Pages/App/Components/ProfilePhotoOutput';
import { UserIcon } from '@/Pages/App/Components/UserIcon';
import { DataReducerEnum } from '@/Pages/App/libraries/enums/data';
import { useAppDispatch } from '@/Pages/App/libraries/hooks/Contexts';
import { emptySpaceCharacter } from '@/Pages/App/libraries/plain';
import { useLocation } from 'react-router-dom';

type ConfigurationProps = {
    url: string | null;
    className?: string;
};

export const ConfigIcon = ({ url, className }: ConfigurationProps) => {
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
            <ProfilePhotoOutput
                url={url}
                iconNoPhoto={<UserIcon />}
            />
        </NavLink_>
    );
};
