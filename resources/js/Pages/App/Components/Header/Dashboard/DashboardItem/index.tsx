import { useLocation } from 'react-router-dom';
import { useLinkClick } from './libraries';
import { NavItem_, NavItemPack_, NavLinkedItem_ } from './styling';

type DashboardItemProps = {
    icon: JSX.Element;
    link?: string;
    titleMenuKey?: string;
    onClick?: () => void;
};

export const DashboardItem = ({
    icon,
    link = '',
    titleMenuKey = '',
    onClick,
}: DashboardItemProps) => {
    const { pathname } = useLocation();
    const onLinkClick = useLinkClick(pathname, link, onClick);
    if (!link) {
        return (
            <NavItem_>
                {icon}
                <NavItemPack_ />
            </NavItem_>
        );
    }
    return (
        <NavItem_>
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
export * from './InventoryIcon';
export * from './ProductsIcon';
export * from './SaleIcon';
export * from './GraphsIcon';
