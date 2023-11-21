import { AbilitiesEnum } from '@/Pages/App/libraries/enums';
import { LogoutLinkAsync } from '@/Pages/App/libraries/toolbox/Asynchronous';
import { hasAbility } from '@/Pages/App/settings';
import { useTranslate } from '@/libraries/hooks';
import { Suspense } from 'react';
import {
    CustomersIcon,
    DashboardItem,
    GraphsIcon,
    InventoryIcon,
    ProductsIcon,
    SaleIcon,
} from './DashboardItem';
import { NavbarNav_ } from './styling';

const hasLogout = hasAbility(AbilitiesEnum.LOGIN);
const hasCustomerScreen = hasAbility(AbilitiesEnum.CUSTOMER_SCREEN);
const hasProductScreen = hasAbility(AbilitiesEnum.PRODUCT_SCREEN);

export const Dashboard = () => {
    const translate = useTranslate();
    return (
        <NavbarNav_>
            {hasCustomerScreen && (
                <DashboardItem
                    link='/customers'
                    icon={<CustomersIcon />}
                    titleMenuKey='menu-customer'
                />
            )}
            {hasProductScreen && (
                <DashboardItem
                    link='/products'
                    icon={<ProductsIcon />}
                    titleMenuKey='menu-products'
                />
            )}
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
            {hasLogout && (
                <DashboardItem
                    lastItem
                    icon={
                        <Suspense>
                            <LogoutLinkAsync label={translate('exit', true)} />
                        </Suspense>
                    }
                />
            )}
        </NavbarNav_>
    );
};

export * from './DashboardItem';
