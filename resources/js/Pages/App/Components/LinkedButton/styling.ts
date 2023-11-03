import { extractThemeNumber, remOutput } from '@/libraries';
import { NavLink } from 'react-router-dom';
import { css, styled } from 'styled-components';

type ContainerBtnProps_ = {
    $bg?: string;
};

export const ContainerBtn_ = styled.div<ContainerBtnProps_>`
    ${({ theme, $bg = theme.tools.linkedBtn.container.bg }) => {
        const btnContainerTheme = theme.tools.linkedBtn.container;
        const btnContainerMeasure = theme.measures.tools.linkedBtn.container;

        return css`
            background: ${$bg};
            box-shadow: ${btnContainerTheme.boxShadow};
            padding-top: ${remOutput(
                extractThemeNumber(theme, btnContainerMeasure.padding.top),
            )};
            padding-bottom: ${remOutput(
                extractThemeNumber(theme, btnContainerMeasure.padding.bottom),
            )};
            padding-left: ${remOutput(
                extractThemeNumber(theme, btnContainerMeasure.padding.left),
            )};
            padding-right: ${remOutput(
                extractThemeNumber(theme, btnContainerMeasure.padding.right),
            )};
            border-radius: ${remOutput(
                extractThemeNumber(theme, btnContainerMeasure.border.radius),
            )};
        `;
    }}
`;

export type BtnLinkedProps = {
    $bg?: string;
};

export const ButtonLinked_ = styled(NavLink)<BtnLinkedProps>`
    ${({ theme, $bg = theme.tools.linkedBtn.btn.bg }) => {
        const btnTheme = theme.tools.linkedBtn.btn;
        const btnMeasure = theme.measures.tools.linkedBtn.btn;
        return css`
            display: flex;
            text-align: center;
            align-items: center;
            text-decoration: none;
            cursor: pointer;
            user-select: none;
            background: ${$bg};
            box-shadow: ${btnTheme.boxShadow};
            padding-top: ${remOutput(btnMeasure.padding.top)};
            padding-bottom: ${remOutput(btnMeasure.padding.bottom)};
            padding-left: ${remOutput(btnMeasure.padding.left)};
            padding-right: ${remOutput(btnMeasure.padding.right)};

            &:active {
                box-shadow: ${btnTheme.active.boxShadow};
            }
        `;
    }}
`;
