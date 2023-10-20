import { FormItem } from '@/Pages/App/Components/FormItem';
import { InputNumber } from '@/Pages/App/Components/InputNumber';
import {
    FutureItemDataInputs_,
    FutureItemData_,
    GeneralItemData_,
    GeneralItemLabel_,
    GeneralItemValue_,
    GeneralItem_,
} from '@/Pages/App/Components/ItemEditor/Item/styling';
import { useTranslate } from '@/libraries/hooks';

type ItemProps = {
    name: string;
    qtyLabelText: string;
    priceLabelText: string;
    minQty?: number;
    maxQty?: number;
    qty?: number;
    price?: number;
    onQtyChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onPriceChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    priceDisabled?: boolean;
    notice?: JSX.Element | null;
};

const Item = ({
    name,
    qtyLabelText,
    priceLabelText,
    minQty = 0,
    maxQty = Infinity,
    qty = 0,
    price = 0,
    onQtyChange = (event) => {},
    onPriceChange = (event) => {},
    priceDisabled = false,
    notice,
}: ItemProps) => {
    const translate = useTranslate();
    return (
        <FutureItemData_ className='FutureItemData_'>
            <GeneralItem_>
                <GeneralItemData_>
                    <GeneralItemLabel_>
                        {translate('name', true) + ':'}
                    </GeneralItemLabel_>
                    <GeneralItemValue_>{name}</GeneralItemValue_>
                </GeneralItemData_>
            </GeneralItem_>
            {notice}
            <FutureItemDataInputs_>
                <FormItem
                    labelName='form--field_qty'
                    labelClass='form--field_qty'
                    labelText={qtyLabelText}
                >
                    <InputNumber
                        min={minQty}
                        id='form--field_qty'
                        value={qty}
                        name='qty'
                        onChange={onQtyChange}
                        max={maxQty}
                        required
                    />
                </FormItem>
                <FormItem
                    labelName='form--field_price'
                    labelClass='form--field_price'
                    labelText={priceLabelText}
                >
                    <InputNumber
                        value={price}
                        min='0'
                        step='0.01'
                        className='form--field form--field_price'
                        id='form--field_price'
                        name='price'
                        disabled={priceDisabled}
                        onChange={onPriceChange}
                        required
                    />
                </FormItem>
            </FutureItemDataInputs_>
        </FutureItemData_>
    );
};

export { Item as FutureItemData };
