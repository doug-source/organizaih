import { ICustomer } from '@/Pages/App/Screens/Customer/Form/types';

export * from '@/Pages/App/Screens/Customer/Form/libraries/contexts';
export * from '@/Pages/App/Screens/Customer/Form/libraries/enums';
export * from '@/Pages/App/Screens/Customer/Form/libraries/hooks';
export * from '@/Pages/App/Screens/Customer/Form/libraries/reducers';
export * from '@/Pages/App/Screens/Customer/Form/libraries/types';

export type OnInitHandler = (customer: ICustomer) => void;
