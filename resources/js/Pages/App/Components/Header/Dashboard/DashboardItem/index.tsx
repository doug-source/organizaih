import { useLocation } from 'react-router-dom';
import { useLinkClick } from './libraries';
import { NavItem_, NavItemPack_, NavLinkedItem_ } from './styling';

type DashboardItemProps = {
    icon: JSX.Element;
    link?: string;
    titleMenuKey?: string;
    lastItem?: boolean;
    onClick?: () => void;
};

export const DashboardItem = ({
    icon,
    link = '',
    titleMenuKey = '',
    lastItem,
    onClick,
}: DashboardItemProps) => {
    const { pathname } = useLocation();
    const onLinkClick = useLinkClick(pathname, link, onClick);
    if (!link) {
        return (
            <NavItem_ $lastItem={lastItem}>
                {icon}
                <NavItemPack_ />
            </NavItem_>
        );
    }
    return (
        <NavItem_ $lastItem={lastItem}>
            <NavLinkedItem_
                icon={icon}
                link={link}
                titleMenuKey={titleMenuKey}
                onLinkClick={onLinkClick}
            />
            <NavItemPack_ />
        </NavItem_>
    );
};

export * from './CustomersIcon';
export * from './GraphsIcon';
export * from './InventoryIcon';
export * from './ProductsIcon';
export * from './SaleIcon';
export * from './UsersIcon';
