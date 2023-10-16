import { State } from '@/Pages/App/Screens/Customer/Form/Base/State';
import { ComponentPropsWithoutRef } from 'react';

export type StateIdentifier = ComponentPropsWithoutRef<typeof State>['stateID'];

export interface IState {
    id?: number;
    acronym: string;
    name: string;
}
