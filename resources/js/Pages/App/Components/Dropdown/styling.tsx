import { extractThemeNumber, remOutput } from '@/libraries';
import { css, styled } from 'styled-components';

type DropdownProps_ = {
    $borderWidth?: number;
    $borderRadius?: number;
    $borderColor?: string;
    $background?: string;
    $boxShadow?: string;
    $width?: string;
};

export const Dropdown_ = styled.select<DropdownProps_>`
    ${({
        theme,
        $borderWidth = theme.measures.dropdown.border.width,
        $borderRadius = theme.measures.dropdown.border.radius,
        $borderColor = theme.dropdown.border.color,
        $background = theme.dropdown.bg,
        $boxShadow = theme.dropdown.boxShadow,
        $width = 'auto',
    }) => {
        return css`
            cursor: pointer;
            border-width: ${remOutput(extractThemeNumber(theme, $borderWidth))};
            border-style: solid;
            border-color: ${$borderColor};
            border-radius: ${remOutput(
                extractThemeNumber(theme, $borderRadius),
            )};
            background: ${$background};
            box-shadow: ${$boxShadow};
            padding-left: ${remOutput(theme.measures.dropdown.padding.left)};
            padding-right: ${remOutput(theme.measures.dropdown.padding.right)};

            width: ${$width};
            &:focus {
                box-shadow: ${$boxShadow};
            }
        `;
    }}
`;

export const DropdownWrapper_ = styled.div`
    display: inline-block;
    width: auto;
    height: auto;
    position: relative;
    ${({ theme }) => {
        const pseudoMeasure = theme.measures.dropdown.pseudo;
        const beforeTranslate = pseudoMeasure.before.transform.translate;
        const afterTranslate = pseudoMeasure.after.transform.translate;
        const beforeBorderWidth = pseudoMeasure.before.borderWidth;
        const afterBorderWidth = pseudoMeasure.after.borderWidth;
        const pseudoTheme = theme.dropdown.pseudo;
        const beforeBorderColor = pseudoTheme.before.borderColor;
        const afterBorderColor = pseudoTheme.after.borderColor;

        return css`
            &:before,
            &:after {
                position: absolute;
                right: 0;
                content: '';
                width: ${remOutput(pseudoMeasure.size)};
                height: ${remOutput(pseudoMeasure.size)};
            }
            &:before {
                top: 0;
                bottom: 0;
                margin: auto 0;
                transform: translate(
                    ${beforeTranslate.x},
                    ${beforeTranslate.y}
                );
                border-left-width: ${remOutput(beforeBorderWidth.left)};
                border-left-style: solid;
                border-left-color: ${beforeBorderColor.left};

                border-right-width: ${remOutput(beforeBorderWidth.right)};
                border-right-style: solid;
                border-right-color: ${beforeBorderColor.right};

                border-bottom-width: ${remOutput(beforeBorderWidth.bottom)};
                border-bottom-style: solid;
                border-bottom-color: ${beforeBorderColor.bottom};
            }
            &:after {
                top: 0;
                bottom: 0;
                margin: auto 0;
                transform: translate(${afterTranslate.x}, ${afterTranslate.y});

                border-left-width: ${remOutput(afterBorderWidth.left)};
                border-left-style: solid;
                border-left-color: ${afterBorderColor.left};

                border-right-width: ${remOutput(afterBorderWidth.right)};
                border-right-style: solid;
                border-right-color: ${afterBorderColor.right};

                border-top-width: ${remOutput(afterBorderWidth.top)};
                border-top-style: solid;
                border-top-color: ${afterBorderColor.top};
            }
        `;
    }}
`;
