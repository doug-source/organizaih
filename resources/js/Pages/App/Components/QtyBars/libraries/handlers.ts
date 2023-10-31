import { DataReducerEnum } from '@/Pages/App/libraries/enums/data';
import { DataPayload } from '@/Pages/App/libraries/types/payload/data';
import { Dispatch, MutableRefObject, SetStateAction } from 'react';

export const makeInputRangeChange = (
    setQtyCur: Dispatch<SetStateAction<number>>,
    clearSelectionRef: MutableRefObject<(() => void) | undefined>,
    appDispatch: Dispatch<DataPayload.Skeleton>,
) => {
    return (qty: number) => {
        setQtyCur(qty);
        const { current: clearSelection } = clearSelectionRef;
        clearSelection && clearSelection();
        appDispatch({
            type: DataReducerEnum.LOADING,
            payload: true,
        });
    };
};
