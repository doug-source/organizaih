import { extractThemeNumber, remOutput } from '@/libraries';
import { fonts } from '@/settings';
import { css, styled } from 'styled-components';

export const Input_ = styled.input`
    ${({ theme }) => {
        const { wideScreen, mediumScreen } = theme.measures;
        const inputMeasures = theme.generic.measures.input;
        const inputTheme = theme.generic.input;
        return css`
            background: ${inputTheme.bg};
            border-color: ${inputTheme.border.color};
            border-width: ${remOutput(
                extractThemeNumber(theme, inputMeasures.border.width),
            )};
            border-radius: ${remOutput(inputMeasures.border.radius)};
            padding-top: ${remOutput(inputMeasures.padding.top)};
            padding-bottom: ${remOutput(inputMeasures.padding.bottom)};
            padding-left: ${remOutput(inputMeasures.padding.left)};
            padding-right: ${remOutput(inputMeasures.padding.right)};
            font-size: ${remOutput(inputMeasures.fontSize)};
            line-height: ${remOutput(inputMeasures.lineHeight)};

            text-indent: ${remOutput(inputMeasures.textIndent)};
            border-style: solid;
            font-family: ${fonts.family[1]};
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
