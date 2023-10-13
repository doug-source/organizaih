import {
    GroupBtnProps,
    buildColorStyle,
    buildFlexStyle,
} from '@/Pages/App/Components/Pagination/Groups/Group/libraries';
import { remOutput } from '@/libraries';
import { css, styled } from 'styled-components';

export const GroupBtn_ = styled.button<GroupBtnProps>`
    ${(props) => {
        const { theme } = props;
        const { mediumScreen, wideScreen } = theme.measures;
        const btnMeasure = theme.measures.pagination.groups.btn;
        const groupsTheme = theme.pagination.groups;
        const colorStyle = buildColorStyle(props);
        const flexStyle = buildFlexStyle(theme);
        return css`
            position: relative;
            border-radius: ${remOutput(btnMeasure.border.radius)};
            padding-left: ${remOutput(btnMeasure.padding)};
            padding-right: ${remOutput(btnMeasure.padding)};

            background: ${groupsTheme.btn.bg};
            box-shadow: ${groupsTheme.btn.boxShadow};
            cursor: pointer;
            ${flexStyle}
            ${colorStyle}

            @media ${mediumScreen} {
                padding-top: ${remOutput(btnMeasure.padding)};
                padding-bottom: ${remOutput(btnMeasure.padding)};
            }
            @media ${wideScreen} {
                padding-top: ${remOutput(btnMeasure.padding)};
                padding-bottom: ${remOutput(btnMeasure.padding)};
            }
        `;
    }}
`;
