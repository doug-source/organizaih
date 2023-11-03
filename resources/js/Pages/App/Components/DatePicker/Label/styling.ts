import { remOutput } from '@/libraries';
import { css, styled } from 'styled-components';

export const DatepickerLabel_ = styled.div`
    ${({ theme }) => {
        const labelTheme = theme.datepicker.label;
        const labelMeasure = theme.measures.datepicker.label;
        const { wideScreen } = theme.measures;
        return css`
            display: flex;
            align-items: center;
            text-align: right;
            border-top-width: ${remOutput(labelMeasure.border.width)};
            border-top-style: solid;
            border-left-width: ${remOutput(labelMeasure.border.width)};
            border-left-style: solid;
            border-bottom-width: ${remOutput(labelMeasure.border.width)};
            border-bottom-style: solid;
            width: ${remOutput(labelMeasure.width)};
            line-height: ${remOutput(labelMeasure.lineHeight)};
            border-top-left-radius: ${remOutput(
                labelMeasure.border.top.leftRadius,
            )};
            border-bottom-left-radius: ${remOutput(
                labelMeasure.border.bottom.leftRadius,
            )};
            font-size: ${remOutput(labelMeasure.fontSize)};
            border-color: ${labelTheme.border.color};
            color: ${labelTheme.color};

            @media ${wideScreen} {
                line-height: ${remOutput(labelMeasure.wide.lineHeight)};
                text-align: center;
            }
        `;
    }}
`;
