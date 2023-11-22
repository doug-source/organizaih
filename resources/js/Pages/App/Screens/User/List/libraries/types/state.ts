import { IUserListData } from '@/Pages/App/Screens/User/List/types';
import { DeletionReducerState, ErrorFromRequest } from '@/Pages/App/libraries';

export type UsersReducerState = {
    total: IUserListData[];
    users: IUserListData[];
    page: number;
    group: number;
    lastPage: number;
    qty: number;
    endpoint: string;
    name: string;
    email: string;
    error: (ErrorFromRequest & { customMessage?: string }) | null;
} & DeletionReducerState<IUserListData, 'id'>;
