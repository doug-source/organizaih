import { Data } from '@/Pages/App/Components/ItemSaver/List/Data';
import { IconPhoto } from '@/Pages/App/Components/ItemSaver/List/IconPhoto';
import { IncludeBtns } from '@/Pages/App/Components/ItemSaver/List/IncludeBtns';
import {
    ItemsIncludedSavedItem_,
    ItemsIncludedSaved_,
} from '@/Pages/App/Components/ItemSaver/List/styling';
import { ItemSaverListType } from '@/Pages/App/Components/ItemSaver/List/types';
import { TouchEvent, TouchEventHandler } from 'react';

type ListProps = {
    iconDefault: JSX.Element | null;
    list: ItemSaverListType[];
    locale?: string;
    touchListeners: {
        touchstart: TouchEventHandler<HTMLDivElement>;
        touchmove: TouchEventHandler<HTMLDivElement>;
        touchend: TouchEventHandler<HTMLDivElement>;
    };
    onTouchStart: (
        evt: TouchEvent<HTMLDivElement>,
        item: ItemSaverListType,
    ) => void;
    onReturnIncluded: (item: ItemSaverListType) => void;
    onRemoveIncluded: (item: ItemSaverListType) => void;
};

const List = ({
    iconDefault,
    list = [],
    locale = 'pt-BR',
    touchListeners = {
        touchstart: () => {},
        touchmove: () => {},
        touchend: () => {},
    },
    onTouchStart = () => {},
    onReturnIncluded = () => {},
    onRemoveIncluded = () => {},
}: ListProps) => {
    return (
        <ItemsIncludedSaved_>
            {list.map((item) => (
                <ItemsIncludedSavedItem_
                    key={item.id}
                    onTouchStart={(evt) => onTouchStart(evt, item)}
                    onTouchMove={touchListeners.touchmove}
                    onTouchEnd={touchListeners.touchend}
                >
                    <IconPhoto
                        iconDefault={iconDefault}
                        photo={item.photo}
                    />
                    <Data
                        name={item.name}
                        qty={item.qty}
                        price={item.price}
                        locale={locale}
                    />
                    <IncludeBtns
                        onReturn={() => onReturnIncluded(item)}
                        onRemove={() => onRemoveIncluded(item)}
                    />
                </ItemsIncludedSavedItem_>
            ))}
        </ItemsIncludedSaved_>
    );
};

export * from './Data';
export * from './IconPhoto';
export * from './IncludeBtns';
export { List as ItemSaverList };
