import { DefaultTheme } from 'styled-components';

export * from './hooks';

export const detachContainerMeasure = (theme: DefaultTheme) => {
    const {
        details: { container },
    } = theme.measures.registerRequest;
    return container;
};
