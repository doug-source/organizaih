import { Dispatch } from 'react';

export const createFirstYearDate = () => {
    const date = new Date();
    date.setDate(1);
    date.setMonth(0);
    return date;
};

export * from './handlers';
export * from './hooks';

import { DataPayload } from '@/Pages/App/libraries/types/payload/data';
import { salesReducer } from '@/Pages/App/Screens/Sales/List/libraries/reducers';

export type AppDispatchFn = Dispatch<DataPayload.Skeleton>;
export type StateSaleList = Parameters<typeof salesReducer>[0];
export type DispatchFn = Dispatch<Parameters<typeof salesReducer>[1]>;
