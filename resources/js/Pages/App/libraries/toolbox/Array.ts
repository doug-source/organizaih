import { remOutput } from '@/libraries';

export const remifyList = (list: number[]) => {
    return list.map((item) => remOutput(item));
};

export const commafyList = (list: (string | number)[]) => {
    return list.join(', ');
};
