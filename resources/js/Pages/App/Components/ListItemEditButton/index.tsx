import {
    getBtnsMeasures,
    getPrimaryBtnTheme,
} from '@/Pages/App/Components/ListItemEditButton/libraries';
import { EditBtn_ } from '@/Pages/App/Components/ListItemEditButton/styling';
import { EditSVG } from '@/Pages/App/libraries/icons/asynchronous';
import { extractThemeNumber } from '@/libraries';
import { ComponentProps, Suspense } from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from 'styled-components';

type ListItemEditButtonProps = ComponentProps<typeof NavLink> & {
    show: boolean;
};

export const ListItemEditButton = ({
    show,
    ...remain
}: ListItemEditButtonProps) => {
    const theme = useTheme();
    if (!show) {
        return null;
    }
    const primaryBtn = getPrimaryBtnTheme(theme);
    const measuresBtn = getBtnsMeasures(theme);
    return (
        <EditBtn_
            $borderRadius={extractThemeNumber(theme, measuresBtn.border.radius)}
            $borderColor={primaryBtn.border.color}
            {...remain}
        >
            <Suspense>
                <EditSVG />
            </Suspense>
        </EditBtn_>
    );
};
