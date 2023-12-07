import {
    DataReducerEnum,
    emptySpaceCharacter,
    useAppDispatch,
} from '@/Pages/App/libraries';
import { ComponentPropsWithoutRef, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { DashboardItem } from '..';

type DashboardItemProps = ComponentPropsWithoutRef<typeof DashboardItem>;

export const useLinkClick = (
    pathname: ReturnType<typeof useLocation>['pathname'],
    link: DashboardItemProps['link'],
    onClick: DashboardItemProps['onClick'],
) => {
    const appDispatch = useAppDispatch();
    return useCallback(() => {
        if (pathname === link || !navigator.onLine) {
            return;
        }
        appDispatch({
            type: DataReducerEnum.TITLE,
            payload: emptySpaceCharacter,
        });
        onClick && onClick();
    }, [
        pathname,
        link,
        onClick,
        navigator.onLine,
        appDispatch,
        emptySpaceCharacter,
    ]);
};
