import {
    getBtnsMeasures,
    getDangerBtnTheme,
} from '@/Pages/App/Components/ListItemRemoveButton/libraries';
import { RemoveButton_ } from '@/Pages/App/Components/ListItemRemoveButton/styling';
import { RemoveSVG } from '@/Pages/App/libraries/icons/asynchronous';
import { extractThemeNumber } from '@/libraries';
import { ComponentPropsWithoutRef, Suspense } from 'react';
import { useTheme } from 'styled-components';

type ListItemRemoveButtonProps = ComponentPropsWithoutRef<'button'> & {
    show: boolean;
};

export const ListItemRemoveButton = ({
    show,
    ...remain
}: ListItemRemoveButtonProps) => {
    const theme = useTheme();
    if (!show) {
        return null;
    }
    const dangerTheme = getDangerBtnTheme(theme);
    const measuresBtn = getBtnsMeasures(theme);
    return (
        <RemoveButton_
            $borderRadius={extractThemeNumber(theme, measuresBtn.border.radius)}
            $borderColor={dangerTheme.border.color}
            {...remain}
        >
            <Suspense>
                <RemoveSVG />
            </Suspense>
        </RemoveButton_>
    );
};
