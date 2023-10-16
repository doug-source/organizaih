import { WeekDay_ } from '@/Pages/App/Components/DatePicker/Calendar/Main/WeekDays/styling';

type WeekDaysProps = {
    names: readonly string[];
};

export const WeekDays = ({ names }: WeekDaysProps) => {
    return (
        <>
            {names.map((day, index) => (
                <WeekDay_
                    $index={index}
                    key={day}
                >
                    {day.toUpperCase()}
                </WeekDay_>
            ))}
        </>
    );
};
