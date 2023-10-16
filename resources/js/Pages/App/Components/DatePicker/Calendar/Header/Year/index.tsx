import { Item } from '@/Pages/App/Components/DatePicker/Calendar/Header/Item';
import { buildYearList } from '@/Pages/App/Components/DatePicker/Calendar/Header/Year/libraries';
import { YearRangeType } from '@/libraries/types';

type YearProps = {
    year: number;
    onYearChange: (year: number) => void;
    qtyYears?: number;
    yearRangeType?: YearRangeType;
};

export const Year = ({
    year,
    onYearChange,
    qtyYears = 10,
    yearRangeType = 'before',
}: YearProps) => {
    return (
        <Item<number>
            value={year}
            list={buildYearList(yearRangeType, qtyYears)}
            itemValue={(year: number, _: number) => year}
            itemContent={(year: number) => `${year}`}
            onChange={onYearChange}
        />
    );
};
