import { GoogleIcon } from '@/Components/GoogleIcon';
import { Row } from '@/Pages/Gate/Components/Row';
import { remOutput } from '@/libraries/toolbox/Styling';
import { css, styled } from 'styled-components';

export const GoogleRow_ = styled(Row)`
    ${({ theme }) => {
        const rowMeasure = theme.gate.measures.googleCredentials.row;
        return css`
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: ${remOutput(rowMeasure.margin.top)};

            border-width: ${remOutput(rowMeasure.border.width)};
            border-style: solid;
            border-color: inherit;
            border-radius: ${remOutput(rowMeasure.borderRadius)};
        `;
    }}
`;

export const GoogleIcon_ = styled(GoogleIcon)`
    ${({ theme }) => {
        const iconMeasure = theme.gate.measures.googleCredentials.icon;
        return css`
            width: ${remOutput(iconMeasure.size)};
            height: ${remOutput(iconMeasure.size)};
            path {
                fill: currentColor;
            }
        `;
    }}
`;

export const MainText_ = styled.main`
    ${({ theme }) => {
        const textMeasure = theme.gate.measures.googleCredentials.text;
        return css`
            font-size: ${remOutput(textMeasure.font.size)};
            line-height: ${remOutput(textMeasure.lineHeight)};
            font-weight: ${textMeasure.font.weight};
            color: inherit;
        `;
    }}
`;
