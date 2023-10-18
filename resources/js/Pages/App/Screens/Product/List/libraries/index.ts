import { ProductsIcon } from '@/Pages/App/Components/Header/Dashboard/DashboardItem/ProductsIcon';
import { ListItem } from '@/Pages/App/Components/ListItem';
import { ListSelectRow } from '@/Pages/App/Components/ListSelectRow';
import { PhotoListItem } from '@/Pages/App/Components/PhotoListItem';
import { makeListHandlers } from '@/Pages/App/Screens/Product/List/libraries/handlers';
import { useProductsReducer } from '@/Pages/App/Screens/Product/List/libraries/hooks';
import { IProductListData } from '@/Pages/App/Screens/Product/List/types';
import { useAppDispatch, useSelections } from '@/Pages/App/libraries/hooks';
import { selectionTargets } from '@/Pages/App/settings';
import { Suspense, createElement } from 'react';

export type AppDispatchFn = ReturnType<typeof useAppDispatch>;
export type SelectionTargetKey = (typeof selectionTargets.product)[number];

export const mountItem = (
    target: SelectionTargetKey,
    action: ReturnType<typeof useSelections>['action'],
    dispatch: ReturnType<typeof useProductsReducer>[1],
    appDispatch: AppDispatchFn,
) => {
    const listHandlers = makeListHandlers();
    const iconNoPhoto = createElement(Suspense, {
        children: createElement(ProductsIcon),
    });
    return (data: IProductListData, index: number) => {
        const image = createElement(PhotoListItem, {
            iconNoPhoto,
            photo: data.photo,
        });
        if (!target || !action) {
            return createElement(ListItem, {
                key: data.id,
                data,
                index,
                urlPrefix: '/products',
                image,
                onRemove: listHandlers.makeItemRemove(dispatch),
                onUpdate: listHandlers.makeItemUpdate(appDispatch),
            });
        }
        return createElement(ListSelectRow, {
            key: data.id,
            data,
            index,
            target,
            action,
            image,
            onClick: listHandlers.makeItemClick(data, target, appDispatch),
        });
    };
};

export * from './enums';
export * from './handlers';
export * from './hooks';
export * from './reducers';
