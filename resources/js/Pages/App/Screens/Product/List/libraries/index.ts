import { ProductsIcon } from '@/Pages/App/Components/Header/Dashboard/DashboardItem/ProductsIcon';
import { ListSelectRow } from '@/Pages/App/Components/ListSelectRow';
import { makeListHandlers } from '@/Pages/App/Screens/Product/List/libraries/handlers';
import { IProductListData } from '@/Pages/App/Screens/Product/List/types';
import { useAppDispatch, useSelections } from '@/Pages/App/libraries/hooks';
import { selectionTargets } from '@/Pages/App/settings';
import { Suspense, createElement } from 'react';

export type AppDispatchFn = ReturnType<typeof useAppDispatch>;
export type SelectionTargetKey = (typeof selectionTargets.product)[number];

export const mountItem = (
    target: SelectionTargetKey,
    action: ReturnType<typeof useSelections>['action'],
    appDispatch: AppDispatchFn,
) => {
    if (!target || !action) {
        return;
    }
    const listHandlers = makeListHandlers();
    return (data: IProductListData, index: number) => {
        const iconNoPhoto = createElement(Suspense, {
            children: createElement(ProductsIcon),
        });

        return createElement(ListSelectRow, {
            data,
            index,
            action,
            target,
            iconNoPhoto,
            onClick: listHandlers.makeItemClick(data, target, appDispatch),
        });
    };
};

export * from './enums';
export * from './handlers';
export * from './hooks';
export * from './reducers';
