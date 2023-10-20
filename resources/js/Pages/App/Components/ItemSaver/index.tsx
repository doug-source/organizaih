import { ItemSaverList } from '@/Pages/App/Components/ItemSaver/List';
import { ItemSaverListType } from '@/Pages/App/Components/ItemSaver/List/types';
import { ItemsIncludedSection_ } from '@/Pages/App/Components/ItemSaver/styling';
import { TouchEventHandler } from 'react';

type ItemSaverProps = {
    list: ItemSaverListType[];
    locale?: string;
    touchListeners: {
        touchstart: TouchEventHandler<HTMLDivElement>;
        touchmove: TouchEventHandler<HTMLDivElement>;
        touchend: TouchEventHandler<HTMLDivElement>;
    };
    iconDefault: JSX.Element | null;
    onReturnIncluded: (item: ItemSaverListType) => void;
    onRemoveIncluded: (item: ItemSaverListType) => void;
    onTouchStart: (item: ItemSaverListType) => void;
};

export const ItemSaver = ({
    list,
    locale,
    touchListeners = {
        touchstart: (event) => {},
        touchmove: (event) => {},
        touchend: (event) => {},
    },
    iconDefault,
    onReturnIncluded = () => {},
    onRemoveIncluded = () => {},
    onTouchStart = (item) => {},
}: ItemSaverProps) => {
    return (
        <ItemsIncludedSection_>
            <ItemSaverList
                iconDefault={iconDefault}
                list={list}
                locale={locale}
                touchListeners={touchListeners}
                onTouchStart={(
                    evt: React.TouchEvent<HTMLDivElement>,
                    item: ItemSaverListType,
                ) => {
                    onTouchStart(item);
                    touchListeners.touchstart(evt);
                }}
                onReturnIncluded={(item) => onReturnIncluded(item)}
                onRemoveIncluded={(item) => onRemoveIncluded(item)}
            />
        </ItemsIncludedSection_>
    );
};

export * from './List';
