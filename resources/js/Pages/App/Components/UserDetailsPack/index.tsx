import { AnonymousDetailsIcon } from '@/Pages/App/Components/AnonymousDetailsIcon';
import { DefineItem } from '@/Pages/App/Components/DefineItem';
import { DetailsContainer } from '@/Pages/App/Components/DetailsContainer';
import { ProfilePhotoOutput } from '@/Pages/App/Components/ProfilePhotoOutput';
import { useTranslate } from '@/libraries';
import { IUser } from '@/libraries/types';
import { ReactNode } from 'react';

type UserDetailsPackProps = {
    user: IUser;
    children?: ReactNode;
};

export const UserDetailsPack = ({ user, children }: UserDetailsPackProps) => {
    const translate = useTranslate();
    return (
        <DetailsContainer>
            <DefineItem
                labelText={translate('name', true) + ':'}
                value={user.name}
            >
                <ProfilePhotoOutput
                    absolute
                    url={user.photo ?? null}
                    iconNoPhoto={<AnonymousDetailsIcon />}
                />
            </DefineItem>
            <DefineItem
                labelText={translate('Email', true) + ':'}
                value={user.email}
            />
            <DefineItem
                labelText={translate('phone', true) + ':'}
                value={user.phone ?? '---'}
            />
            {children}
        </DetailsContainer>
    );
};
