export * from './contexts';
export * from './enums';
export * from './hooks';
export * from './reducers';
export * from './types';

import { useProductFormInit } from '@/Pages/App/Screens/Product/Form/libraries/hooks';
export type OnInitFn = ReturnType<typeof useProductFormInit>;
