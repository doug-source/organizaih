import { remOutput } from '@/libraries';
import { DefaultTheme } from 'styled-components';

export * from './enums';
export * from './handlers';
export * from './hooks';
export * from './reducers';
export * from './types';

export const getSvgSize = (theme: DefaultTheme) => {
    return remOutput(theme.measures.customer.list.photo.svg.size);
};
