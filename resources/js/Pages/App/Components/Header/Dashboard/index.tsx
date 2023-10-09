import { useTranslate } from '@/libraries';
import { LogoutLink } from '../..';
import {
    CustomersIcon,
    DashboardItem,
    GraphsIcon,
    InventoryIcon,
    ProductsIcon,
    SaleIcon,
} from './DashboardItem';
import { NavbarNav_ } from './styling';

export const Dashboard = () => {
    const translate = useTranslate();
    return (
        <NavbarNav_>
            <DashboardItem
                link='/customers'
                icon={<CustomersIcon />}
                titleMenuKey='menu-customer'
            />
            <DashboardItem
                link='/products'
                icon={<ProductsIcon />}
                titleMenuKey='menu-products'
            />
            <DashboardItem
                link='/inventories'
                icon={<InventoryIcon />}
                titleMenuKey='menu-inventory'
            />
            <DashboardItem
                link='/sales'
                icon={<SaleIcon />}
                titleMenuKey='menu-sale'
            />
            <DashboardItem
                link='/graphs'
                icon={<GraphsIcon />}
                titleMenuKey='menu-graph'
            />
            <DashboardItem
                icon={<LogoutLink label={translate('exit', true)} />}
            />
        </NavbarNav_>
    );
};

export * from './DashboardItem';
