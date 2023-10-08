import { extractThemeNumber, remOutput } from '@/libraries';
import { fonts } from '@/settings';
import { css, styled } from 'styled-components';

export const Input_ = styled.input`
    appearance: none;
    ${({ theme }) => {
        const { wideScreen, mediumScreen } = theme.measures;
        const inputMeasures = theme.generic.measures.input;
        const inputTheme = theme.generic.input;
        return css`
            padding-top: ${remOutput(inputMeasures.padding.top)};
            padding-bottom: ${remOutput(inputMeasures.padding.bottom)};
            padding-left: ${remOutput(inputMeasures.padding.left)};
            padding-right: ${remOutput(inputMeasures.padding.right)};
            text-indent: ${remOutput(inputMeasures.textIndent)};
            font-size: ${remOutput(inputMeasures.fontSize)};
            line-height: ${remOutput(inputMeasures.lineHeight)};
            border-width: ${remOutput(
                extractThemeNumber(theme, inputMeasures.border.width),
            )};
            border-style: solid;
            border-color: ${inputTheme.border.color};
            border-radius: ${remOutput(inputMeasures.border.radius)};
            font-family: ${fonts.family[1]};
            background: ${inputTheme.bg};
            box-shadow: ${inputTheme.boxShadow};
            color: ${inputTheme.color};

            &:focus {
                outline: none;
                --tw-ring-color: ${inputTheme.border.color};
                border-color: ${inputTheme.border.color};
            }
            @media ${wideScreen} {
                text-indent: ${remOutput(inputMeasures.wide.textIndent)};
            }
            @media ${mediumScreen} {
                text-indent: ${remOutput(inputMeasures.wide.textIndent)};
            }
        `;
    }}
`;
