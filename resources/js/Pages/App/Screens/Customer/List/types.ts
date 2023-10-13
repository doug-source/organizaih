import { selectionTargets } from '@/Pages/App/settings';

export interface ICustomerListData {
    id: number;
    name: string;
    photo: string | null;
}

export type SelectionTargetKey = (typeof selectionTargets.customer)[number];
