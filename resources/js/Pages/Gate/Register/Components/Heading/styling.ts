import { remOutput } from '@/libraries/toolbox/Styling';
import { css, styled } from 'styled-components';

export const Heading_ = styled.h3`
    ${({ theme }) => {
        const headingMeasure = theme.register.measures.heading;
        return css`
            text-align: center;
            margin-top: ${remOutput(headingMeasure.padding.top)};
            margin-bottom: ${remOutput(headingMeasure.padding.bottom)};
        `;
    }}
`;
