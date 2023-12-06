export type DefaultErrorKeys = 'name' | 'phone' | 'photo';

export type ErrorKeys = DefaultErrorKeys | 'status';

type RecordKeys<T> = T extends string | number | symbol ? T : never;

export type ErrorsBox<T> = Partial<Record<RecordKeys<T>, string>>;

export type ThenableCallback = (response: {
    status: number;
    data: {
        data: { photo?: string };
    };
}) => void;
