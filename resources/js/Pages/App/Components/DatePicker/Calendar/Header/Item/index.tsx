import { HeaderItem_ } from '@/Pages/App/Components/DatePicker/Calendar/Header/Item/styling';

type ItemProps<T> = {
    value: number;
    onChange: (val: number) => void;
    list: readonly T[];
    itemValue: (item: T, index: number) => number;
    itemContent: (item: T) => string;
};

export const Item = <T,>({
    value,
    onChange,
    list,
    itemValue,
    itemContent,
}: ItemProps<T>) => {
    return (
        <HeaderItem_>
            <select
                value={value}
                onChange={(evt) => {
                    onChange(Number(evt.target.value));
                }}
            >
                {list.map((item, i) => (
                    <option
                        key={`${item}`}
                        value={itemValue(item, i)}
                    >
                        {itemContent(item)}
                    </option>
                ))}
            </select>
        </HeaderItem_>
    );
};
