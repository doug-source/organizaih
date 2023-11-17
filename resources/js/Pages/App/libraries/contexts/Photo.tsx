import { DataReducerState } from '@/Pages/App/libraries/types/state/data';
import { ReactNode, createContext } from 'react';

type PhotoProps = {
    value: DataReducerState['photo'];
    children?: ReactNode;
};

export const PhotoContext = createContext<PhotoProps['value']>(undefined);

export const Photo = ({ value, children }: PhotoProps) => {
    const photoFile = value;

    return (
        <PhotoContext.Provider value={photoFile}>
            {children}
        </PhotoContext.Provider>
    );
};
