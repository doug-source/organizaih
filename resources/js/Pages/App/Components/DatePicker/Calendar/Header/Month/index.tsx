import { firstUpperCase } from '@/libraries';
import { Item } from '@/Pages/App/Components/DatePicker/Calendar/Header/Item';

type MonthProps = {
    month: number | null;
    months: readonly string[];
    onMonthChange: (month: number) => void;
};

export const Month = ({ month, months, onMonthChange }: MonthProps) => {
    if (month === null) {
        return null;
    }
    return (
        <Item<string>
            value={month - 1}
            list={months}
            itemValue={(_: string, i: number) => i}
            itemContent={(month: string) => firstUpperCase(month)}
            onChange={onMonthChange}
        />
    );
};
