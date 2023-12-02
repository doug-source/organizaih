import { remOutput } from '@/libraries/toolbox/Styling';
import { css, styled } from 'styled-components';

export const Legend_ = styled.legend`
    ${({ theme }) => {
        const legendTheme = theme.config.fieldset.legend;
        const legendMeasure = theme.measures.config.fieldset.legend;
        return css`
            border-width: ${remOutput(legendMeasure.border.width)};
            border-style: solid;
            border-color: ${legendTheme.border.color};
            border-radius: ${remOutput(legendMeasure.border.radius)};
            margin-left: ${remOutput(legendMeasure.margin.left)};
            padding-top: ${remOutput(legendMeasure.padding.top)};
            padding-bottom: ${remOutput(legendMeasure.padding.bottom)};
            padding-left: ${remOutput(legendMeasure.padding.left)};
            padding-right: ${remOutput(legendMeasure.padding.right)};
        `;
    }}
`;
