import { DefaultTheme } from 'styled-components';

export type ReducerState = {
    title: string;
    loading: boolean | null;
    error: (object & { customMessage?: [string] }) | null;
    theme: DefaultTheme;
};
