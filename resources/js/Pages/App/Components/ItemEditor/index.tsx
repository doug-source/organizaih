import { FutureBtns } from '@/Pages/App/Components/ItemEditor/FutureBtns';
import { IconPhoto } from '@/Pages/App/Components/ItemEditor/IconPhoto';
import { FutureItemData } from '@/Pages/App/Components/ItemEditor/Item';
import {
    FutureItem_,
    FutureSection_,
} from '@/Pages/App/Components/ItemEditor/styling';
import { MouseEventHandler } from 'react';

type ItemSelectedProp = {
    photo?: string | null;
    name: string;
    qty: number;
    price: number;
};

type ItemEditorProps = {
    itemSelected: ItemSelectedProp | null;
    iconDefault?: JSX.Element;
    qtyLabelText: string;
    priceLabelText: string;
    minQty?: number;
    maxQty?: number;
    onQtyChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onPriceChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onRemoveSelected?: MouseEventHandler<HTMLButtonElement>;
    onIncludeSelected?: MouseEventHandler<HTMLButtonElement>;
    priceDisabled?: boolean;
    notice?: JSX.Element | null;
};

export const ItemEditor = ({
    itemSelected,
    iconDefault,
    qtyLabelText = '',
    priceLabelText = '',
    minQty = 1,
    maxQty = Infinity,
    onQtyChange = (event) => {},
    onPriceChange = (event) => {},
    onRemoveSelected = () => {},
    onIncludeSelected = () => {},
    priceDisabled = false,
    notice,
}: ItemEditorProps) => {
    if (!itemSelected) {
        return <FutureSection_></FutureSection_>;
    }

    return (
        <FutureSection_>
            <FutureItem_>
                <IconPhoto
                    photo={itemSelected.photo}
                    iconDefault={iconDefault}
                />
                <FutureItemData
                    name={itemSelected.name}
                    qtyLabelText={qtyLabelText}
                    priceLabelText={priceLabelText}
                    minQty={minQty}
                    maxQty={maxQty}
                    qty={itemSelected.qty}
                    price={itemSelected.price}
                    onQtyChange={onQtyChange}
                    onPriceChange={onPriceChange}
                    priceDisabled={priceDisabled}
                    notice={notice}
                />
                <FutureBtns
                    minQty={minQty}
                    onRemove={onRemoveSelected}
                    onInclude={onIncludeSelected}
                />
            </FutureItem_>
        </FutureSection_>
    );
};
