import {
    getBtnsMeasures,
    getTrueBtnTheme,
} from '@/Pages/App/Components/ListItemTrueButton/libraries';
import { TrueButton_ } from '@/Pages/App/Components/ListItemTrueButton/styling';
import { ThumbIcon } from '@/Pages/App/Components/ThumbIcon';
import { extractThemeNumber } from '@/libraries/toolbox/Styling';
import { ComponentPropsWithoutRef } from 'react';
import { useTheme } from 'styled-components';

type ListItemTrueButtonProps = ComponentPropsWithoutRef<typeof TrueButton_> & {
    show: boolean;
};

export const ListItemTrueButton = ({
    show,
    ...remain
}: ListItemTrueButtonProps) => {
    const theme = useTheme();
    if (!show) {
        return null;
    }
    const trueBtn = getTrueBtnTheme(theme);
    const measuresBtn = getBtnsMeasures(theme);
    return (
        <TrueButton_
            $borderRadius={extractThemeNumber(theme, measuresBtn.border.radius)}
            $borderColor={trueBtn.border.color}
            {...remain}
        >
            <ThumbIcon />
        </TrueButton_>
    );
};
