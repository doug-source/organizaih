import { remOutput } from '@/libraries/toolbox/Styling';
import { css, styled } from 'styled-components';

export const DetailsContainer_ = styled.div`
    ${({ theme }) => {
        const { container: containerMeasure } = theme.measures.details;
        return css`
            display: flex;
            flex-direction: column;
            gap: ${remOutput(containerMeasure.gap)};
        `;
    }}
`;
