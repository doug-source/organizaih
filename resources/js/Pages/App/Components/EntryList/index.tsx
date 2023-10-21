import { EntryItem } from '@/Pages/App/Components/EntryItem';
import { EntryList_ } from '@/Pages/App/Components/EntryList/styling';
import { useLongTouchPress } from '@/Pages/App/libraries/hooks/Touch';
import { ComponentPropsWithoutRef } from 'react';

type LongTouchPressReturn = ReturnType<typeof useLongTouchPress>[1];
type EntryItemProps = ComponentPropsWithoutRef<typeof EntryItem>;

type EntryListProps<T, P> = {
    Actions: ({ index }: { index: number }) => EntryItemProps['actions'];
    DataContent: (props: P) => EntryItemProps['children'];
    getProps: (value: T) => [P, LongTouchPressReturn];
    dataList: T[];
};

export const EntryList = <T, P extends JSX.IntrinsicAttributes>({
    Actions,
    DataContent,
    getProps,
    dataList,
}: EntryListProps<T, P>) => {
    return (
        <EntryList_>
            {dataList.map((data, index) => {
                const [props, touchListeners] = getProps(data);
                return (
                    <EntryItem
                        key={index}
                        actions={<Actions index={index} />}
                        onTouchStart={touchListeners.touchstart}
                        onTouchMove={touchListeners.touchmove}
                        onTouchEnd={touchListeners.touchend}
                    >
                        <DataContent {...props} />
                    </EntryItem>
                );
            })}
        </EntryList_>
    );
};
