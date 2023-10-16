import { Month } from '@/Pages/App/Components/DatePicker/Calendar/Header/Month';
import { Year } from '@/Pages/App/Components/DatePicker/Calendar/Header/Year';
import {
    ArrowLeft_,
    ArrowRight_,
    CalendarHeader_,
    HeaderMiddle_,
    Spacer_,
} from '@/Pages/App/Components/DatePicker/Calendar/Header/styling';
import { ComponentProps, MouseEventHandler } from 'react';

type MonthProps = ComponentProps<typeof Month>;
type YearProps = ComponentProps<typeof Year>;

type HeaderComponentProps = {
    onArrowLeft: MouseEventHandler<HTMLButtonElement>;
    onArrowRight: MouseEventHandler<HTMLButtonElement>;
    children?: JSX.Element;
};

const HeaderComponent = ({
    onArrowLeft,
    onArrowRight,
    children,
}: HeaderComponentProps) => {
    return (
        <CalendarHeader_>
            <ArrowLeft_ onClick={onArrowLeft} />
            <HeaderMiddle_>
                <span>{children}</span>
            </HeaderMiddle_>
            <ArrowRight_ onClick={onArrowRight} />
        </CalendarHeader_>
    );
};

type InheritProps = {
    onArrowLeft: HeaderComponentProps['onArrowLeft'];
    onArrowRight: HeaderComponentProps['onArrowRight'];
};

type YearMonthDayProps = InheritProps & MonthProps & YearProps;
type YearMonthProps = InheritProps & YearProps;

export const Header = Object.assign(HeaderComponent, {
    YearMonthDay: ({
        onArrowLeft,
        onArrowRight,
        month,
        months,
        onMonthChange,
        year,
        onYearChange,
        qtyYears,
        yearRangeType,
    }: YearMonthDayProps) => {
        return (
            <HeaderComponent
                onArrowLeft={onArrowLeft}
                onArrowRight={onArrowRight}
            >
                <>
                    <Month
                        month={month}
                        months={months}
                        onMonthChange={onMonthChange}
                    />{' '}
                    <Year
                        year={year}
                        onYearChange={onYearChange}
                        qtyYears={qtyYears}
                        yearRangeType={yearRangeType}
                    />
                </>
            </HeaderComponent>
        );
    },
    YearMonth: ({
        onArrowLeft,
        onArrowRight,
        year,
        onYearChange,
        qtyYears,
        yearRangeType,
    }: YearMonthProps) => {
        return (
            <HeaderComponent
                onArrowLeft={onArrowLeft}
                onArrowRight={onArrowRight}
            >
                <>
                    <Spacer_ />
                    <Year
                        year={year}
                        onYearChange={onYearChange}
                        qtyYears={qtyYears}
                        yearRangeType={yearRangeType}
                    />
                </>
            </HeaderComponent>
        );
    },
});
