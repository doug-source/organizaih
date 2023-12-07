import { CustomerIcon } from '@/Pages/App/Components/CustomerIcon';
import { GraphIcon } from '@/Pages/App/Components/GraphIcon';
import { InventoryIcon } from '@/Pages/App/Components/InventoryIcon';
import { ProductsIcon } from '@/Pages/App/Components/ProductsIcon';
import { AbilitiesEnum } from '@/Pages/App/libraries/enums';
import { LogoutLinkAsync } from '@/Pages/App/libraries/toolbox/Asynchronous';
import { hasAbility } from '@/Pages/App/settings';
import { useTranslate } from '@/libraries/hooks';
import { Suspense } from 'react';
import { DashboardItem, SaleIcon, UsersIcon } from './DashboardItem';
import { NavbarNav_ } from './styling';

const hasLogout = hasAbility(AbilitiesEnum.LOGIN);
const hasCustomerScreen = hasAbility(AbilitiesEnum.CUSTOMER_SCREEN);
const hasProductScreen = hasAbility(AbilitiesEnum.PRODUCT_SCREEN);
const hasInventoryScreen = hasAbility(AbilitiesEnum.INVENTORY_SCREEN);
const hasSaleScreen = hasAbility(AbilitiesEnum.SALE_SCREEN);
const hasGraphScreen = hasAbility(AbilitiesEnum.GRAPHIC_SCREEN);
const hasUserScreen = hasAbility(AbilitiesEnum.USER_SCREEN);

export const Dashboard = () => {
    const translate = useTranslate();
    return (
        <NavbarNav_>
            {hasCustomerScreen && (
                <DashboardItem
                    link='/customers'
                    icon={<CustomerIcon />}
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
            {hasInventoryScreen && (
                <DashboardItem
                    link='/inventories'
                    icon={<InventoryIcon />}
                    titleMenuKey='menu-inventory'
                />
            )}
            {hasSaleScreen && (
                <DashboardItem
                    link='/sales'
                    icon={<SaleIcon />}
                    titleMenuKey='menu-sale'
                />
            )}
            {hasGraphScreen && (
                <DashboardItem
                    link='/graphs'
                    icon={<GraphIcon />}
                    titleMenuKey='menu-graph'
                />
            )}
            {hasUserScreen && (
                <DashboardItem
                    link='/users'
                    icon={<UsersIcon />}
                    titleMenuKey='users'
                />
            )}
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
