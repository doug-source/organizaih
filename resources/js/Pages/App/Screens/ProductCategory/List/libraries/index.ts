import { selectionTargets } from '@/Pages/App/settings';
import { useProductCategoryReduce } from '.';

export * from './contexts';
export * from './enums';
export * from './handlers';
export * from './hooks';
export * from './reducers';
export * from './types';

export type SelectionTargetKey =
    (typeof selectionTargets.productCategory)[number];

export type ReducerState = ReturnType<typeof useProductCategoryReduce>[0];
export type DispatchFn = ReturnType<typeof useProductCategoryReduce>[1];
