import { DataReducerEnum } from './enum';
import { ReducerState } from './state';

export namespace Payload {
    type Title = {
        type: DataReducerEnum.TITLE;
        payload: ReducerState['title'];
    };
    type Error = {
        type: DataReducerEnum.ERROR;
        payload: ReducerState['error'];
    };
    type Loading = {
        type: DataReducerEnum.LOADING;
        payload: ReducerState['loading'];
    };
    type ChangeTheme = {
        type: DataReducerEnum.CHANGE_THEME;
    };
    export type Skeleton = Title | Error | Loading | ChangeTheme;
}
