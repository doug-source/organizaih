export type DeletionReducerState<T, W extends keyof T> = {
    total: T[];
    preConfirm: boolean;
    idRemoved: T[W] | null;
    warning: boolean;
};
