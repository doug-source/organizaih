import { toRem } from '@/libraries';
import { DefaultTheme, css } from 'styled-components';

export type GroupBtnProps = {
    $selected: boolean;
    theme: DefaultTheme;
};

type MeasureProps = {
    after: {
        width: string;
        height: string;
        border: {
            radius: number;
        };
    };
};

export const buildSelectedStyle = (
    { after }: MeasureProps,
    { theme }: GroupBtnProps,
) => {
    return css`
        color: ${theme.pagination.groups.btn.selected.color};
        text-shadow: ${theme.pagination.groups.btn.selected.textShadow};
        font-weight: bold;
        background-color: ${theme.pagination.groups.btn.selected.bg};
        &:after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            box-shadow: ${theme.pagination.groups.btn.selected.after.boxShadow};
            width: ${after.width};
            height: ${after.height};
            ${toRem('border-radius', after.border.radius)};
        }
    `;
};

export const buildColorStyle = (props: GroupBtnProps) => {
    const { theme, $selected } = props;
    const { btn: btnMeasure } = theme.measures.pagination.groups;
    const groupsTheme = theme.pagination.groups;
    if ($selected) {
        return buildSelectedStyle(btnMeasure.selected, props);
    }
    return css`
        color: ${groupsTheme.btn.color};
    `;
};

export const buildFlexStyle = (theme: DefaultTheme) => {
    const { btn: btnMeasure } = theme.measures.pagination.groups;
    return css`
        flex-grow: ${btnMeasure.flex.grow};
        flex-shrink: ${btnMeasure.flex.shrink};
        flex-basis: ${btnMeasure.flex.basis};
    `;
};
