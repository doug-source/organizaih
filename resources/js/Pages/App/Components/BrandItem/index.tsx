import { Suspense } from 'react';
import { DataReducerEnum, useAppDispatch } from '../../libraries';
import { BrandIcon_, NavLink_ } from './styling';

type BrandItemProps = {
    className?: string;
};

export const BrandItem = ({ className }: BrandItemProps) => {
    const appDispatch = useAppDispatch();
    return (
        <NavLink_
            className={className}
            to='/'
            onClick={() => {
                appDispatch({
                    type: DataReducerEnum.LOADING,
                    payload: false,
                });
            }}
        >
            <Suspense>
                <BrandIcon_ />
            </Suspense>
        </NavLink_>
    );
};
