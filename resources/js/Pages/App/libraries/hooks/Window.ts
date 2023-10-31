import { DataReducerEnum } from '@/Pages/App/libraries/enums/data';
import { dataReducer } from '@/Pages/App/libraries/reducers/data';
import { Dispatch, useCallback, useEffect } from 'react';

type DataReducerArgs = Parameters<typeof dataReducer>;

export const useWindowResizeHandler = (
    dispatch: Dispatch<DataReducerArgs[1]>,
) => {
    const resizeHandler = useCallback(() => {
        dispatch({
            type: DataReducerEnum.WINDOW_RESIZE,
            payload: {
                width: document.body.clientWidth,
                height: document.body.clientHeight,
            },
        });
    }, [dispatch]);
    useEffect(() => {
        window.addEventListener('resize', resizeHandler, true);
        return () => {
            window.removeEventListener('resize', resizeHandler);
        };
    });
};

export const useStarterWindowResize = (
    state: DataReducerArgs[0],
    dispatch: Dispatch<DataReducerArgs[1]>,
) => {
    useEffect(() => {
        if (state.windowWidth === null && state.windowHeight === null) {
            dispatch({
                type: DataReducerEnum.WINDOW_RESIZE,
                payload: {
                    width: document.body.clientWidth,
                    height: document.body.clientHeight,
                },
            });
        }
    }, [state.windowWidth, state.windowHeight, dispatch]);
};
