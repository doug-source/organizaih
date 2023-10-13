import { DeletionReducerEnum } from '@/Pages/App/libraries/enums';

export namespace DeletionPayload {
    type Delete = {
        type: DeletionReducerEnum.DELETE;
    };
    type Undefined = {
        type:
            | DeletionReducerEnum.CLEAR_DELETE
            | DeletionReducerEnum.CANCEL_DELETE
            | DeletionReducerEnum.HIDE_CONFIRM
            | DeletionReducerEnum.HIDE_WARNING
            | DeletionReducerEnum.SHOW_WARNING;
    };
    type PrepareDelete<T> = {
        type: DeletionReducerEnum.PREPARE_DELETE;
        payload: T;
    };

    export type Skeleton<W> = Delete | Undefined | PrepareDelete<W>;
}
