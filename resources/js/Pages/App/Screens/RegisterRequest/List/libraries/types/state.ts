import { DeletionReducerState, ErrorFromRequest } from '@/Pages/App/libraries';
import { IRegisterRequest } from '@/Pages/App/Screens/RegisterRequest/types';

export type RegisterRequestsReducerState = {
    total: IRegisterRequest[];
    requests: IRegisterRequest[];
    page: number;
    group: number;
    lastPage: number;
    qty: number;
    endpoint: string;
    email: string;
    error: (ErrorFromRequest & { customMessage?: string }) | null;
} & DeletionReducerState<IRegisterRequest, 'id'>;
