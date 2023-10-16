import { firstUpperCase } from '@/libraries';

export const isValidDate = (date: Date) => {
    return !Number.isNaN(date.valueOf());
};

type FormatDate = 'Y-m-d' | 'Y-m';

export const formatRequestDate = (
    date: Date | null,
    format: FormatDate = 'Y-m-d',
) => {
    if (!date) {
        return '';
    }
    const year = date.getFullYear();
    const month = `${date.getMonth() + 1}`.padStart(2, '0');
    if (format === 'Y-m') {
        return `${year}-${month}`;
    }
    const monthDay = `${date.getDate()}`.padStart(2, '0');
    return `${year}-${month}-${monthDay}`;
};

export const formatDateByString = (str: string | null) => {
    const pattern = /^\d\d\/\d\d\/\d\d\d\d$/;
    if (!str || str.search(pattern) === -1) {
        return null;
    }
    const [monthDay, month, year] = str.split('/');
    const date = new Date();
    date.setDate(Number(monthDay));
    date.setMonth(Number(month) - 1);
    date.setFullYear(Number(year));
    return date;
};

export const formatDateByLocale = (localName: string, date = new Date()) => {
    if (!isValidDate(date)) {
        return null;
    }
    return new Intl.DateTimeFormat(localName).format(date);
};

export const formatMonthYearDate = (
    date: Date,
    months: ReadonlyArray<string>,
) => {
    if (!isValidDate(date)) {
        return null;
    }
    const [monthIndex, year] = [date.getMonth(), date.getFullYear()];

    return `${months[monthIndex]} ${year}`;
};

export const isLeapYear = (year: number) => {
    if (year < 0) {
        return false;
    }
    if (year % 4 !== 0) {
        return false;
    }
    if (year % 100 === 0 && year % 400 !== 400) {
        return false;
    }
    return true;
};

export const isFebruary = (month: number) => {
    return month === 2;
};

// Returns the weekdays/months list for a given format
const buildListByLocale = (
    localeName: string,
    type: 'weekday' | 'month',
    format: 'long' | 'narrow' | 'short',
) => {
    const { format: FormatFn } = new Intl.DateTimeFormat(localeName, {
        [type]: format,
    });
    if (type === 'weekday') {
        return Array.from({ length: 7 }, (_, day) =>
            FormatFn(new Date(Date.UTC(2023, 1, day))),
        );
    }
    return Array.from({ length: 12 }, (_, month) =>
        FormatFn(new Date(Date.UTC(2023, month + 1, 1))),
    );
};

// Returns first day of the month for a given year from 1 - 7
// 1 => Monday, 7 => Sunday
const getMonthFirstDay = (
    month: number = DateManager.MONTH_CURRENT,
    year: number = DateManager.YEAR_CURRENT,
) => {
    return new Date(`${year}-${`${month}`.padStart(2, '0')}-01`).getDay() + 1;
};

// Returns the number days in a month for a given year from 28 - 31
const getMonthDaysQty = (
    month: number = DateManager.MONTH_CURRENT,
    year: number = DateManager.YEAR_CURRENT,
) => {
    if (isFebruary(month)) {
        return isLeapYear(year) ? 29 : 28;
    }
    if (DateManager.MONTHS_30.includes(month)) {
        return 30;
    }
    return 31;
};

export const isSameMonth = (
    date: Date,
    baseDate = DateManager.DATE_CURRENT,
) => {
    if (!isValidDate(date) || !isValidDate(baseDate)) {
        return false;
    }
    const baseDateMonth = baseDate.getMonth() + 1;
    const baseDateYear = baseDate.getFullYear();
    const dateMonth = date.getMonth() + 1;
    const dateYear = date.getFullYear();
    return baseDateMonth === dateMonth && baseDateYear === dateYear;
};

export const isSameDay = (date: Date, baseDate = DateManager.DATE_CURRENT) => {
    if (!isValidDate(date) || !isValidDate(baseDate)) {
        return false;
    }
    return baseDate.getDate() === date.getDate() && isSameMonth(date, baseDate);
};

export const createDate = (day: number, month: number, year: number) => {
    const date = new Date();
    date.setFullYear(year);
    date.setMonth(month);
    date.setDate(day);
    return date;
};

export const getPreviousMonth = (
    month = DateManager.MONTH_CURRENT,
    year = DateManager.YEAR_CURRENT,
) => {
    const prevMonth = month > 1 ? month - 1 : 12;
    const prevMonthYear = month > 1 ? year : year - 1;
    return { month: prevMonth, year: prevMonthYear };
};

export const getNextMonth = (
    month = DateManager.MONTH_CURRENT,
    year = DateManager.YEAR_CURRENT,
) => {
    const nextMonth = month < 12 ? month + 1 : 1;
    const nextMonthYear = month < 12 ? year : year + 1;
    return { month: nextMonth, year: nextMonthYear };
};

export const buildTrimonthDays = (
    month = DateManager.MONTH_CURRENT,
    year = DateManager.YEAR_CURRENT,
) => {
    const monthDays = getMonthDaysQty(month, year);
    const monthFirstDay = getMonthFirstDay(month, year);
    const daysFromPrevMonth = monthFirstDay - 1;
    const daysFromNextMonth =
        DateManager.CALENDAR_WEEKS * 7 - (daysFromPrevMonth + monthDays);
    const { month: prevMonth, year: prevMonthYear } = getPreviousMonth(
        month,
        year,
    );
    const { month: nextMonth, year: nextMonthYear } = getNextMonth(month, year);
    const prevMonthDays = getMonthDaysQty(prevMonth, prevMonthYear);
    const prevMonthDates = Array.from(
        { length: daysFromPrevMonth },
        (_, index) => {
            const day = index + 1 + (prevMonthDays - daysFromPrevMonth);
            return [
                prevMonthYear,
                `${prevMonth}`.padStart(2, '0'),
                `${day}`.padStart(2, '0'),
            ];
        },
    );
    const currentMonthDates = Array.from({ length: monthDays }, (_, index) => {
        const day = index + 1;
        return [year, `${month}`.padStart(2, '0'), `${day}`.padStart(2, '0')];
    });
    const nextMonthDates = Array.from(
        { length: daysFromNextMonth },
        (_, index) => {
            const day = index + 1;
            return [
                nextMonthYear,
                `${nextMonth}`.padStart(2, '0'),
                `${day}`.padStart(2, '0'),
            ];
        },
    );
    return [...prevMonthDates, ...currentMonthDates, ...nextMonthDates];
};

export class DateManager {
    public static readonly DATE_CURRENT = new Date();
    public static readonly MONTH_CURRENT =
        DateManager.DATE_CURRENT.getMonth() + 1;
    public static readonly YEAR_CURRENT =
        DateManager.DATE_CURRENT.getFullYear();
    public static readonly MONTHS_30: ReadonlyArray<number> = [4, 6, 9, 11];
    public static readonly CALENDAR_WEEKS = 6;
    public readonly WEEKS: Readonly<
        Record<'short' | 'long', ReadonlyArray<string>>
    >;
    public readonly MONTHS: Readonly<
        Record<'short' | 'long', ReadonlyArray<string>>
    >;

    constructor(localeName: string) {
        this.WEEKS = {
            short: buildListByLocale(localeName, 'weekday', 'short').map((d) =>
                firstUpperCase(d.replace('.', '')),
            ),
            long: buildListByLocale(localeName, 'weekday', 'long').map(
                firstUpperCase,
            ),
        };
        this.MONTHS = {
            short: buildListByLocale(localeName, 'month', 'short').map((d) =>
                firstUpperCase(d.replace('.', '')),
            ),
            long: buildListByLocale(localeName, 'month', 'long').map(
                firstUpperCase,
            ),
        };
    }
}
