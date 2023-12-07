import { NavLinkItemLabel_ } from '@/Pages/App/Components/NavLinkItem/styling';
import { useTranslate } from '@/libraries';
import { NavLink } from 'react-router-dom';

type NavLinkItemProps = {
    icon: JSX.Element;
    titleMenuKey: string;
    link: string;
    className?: string;
    onLinkClick?: () => void;
};

export const NavLinkItem = ({
    icon,
    titleMenuKey,
    className,
    link,
    onLinkClick,
}: NavLinkItemProps) => {
    const translate = useTranslate();
    return (
        <NavLink
            to={link}
            className={className}
            onClick={onLinkClick}
        >
            {icon}
            <NavLinkItemLabel_>
                {translate(titleMenuKey, true)}
            </NavLinkItemLabel_>
        </NavLink>
    );
};
