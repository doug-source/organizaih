type RecordKeys<T> = T extends string | number | symbol ? T : never;

export type ErrorsBox<T> = Partial<Record<RecordKeys<T>, string>>;

export type ThenDataReturn = {
    message: string;
};

export type CatchReturn<T> = {
    response: {
        status: number;
        data: {
            errors: Record<RecordKeys<T>, [string]>;
        };
    };
};
