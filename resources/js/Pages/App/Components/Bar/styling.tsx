import { remOutput } from '@/libraries';
import { css, styled } from 'styled-components';

export const Bar_ = styled.div`
    ${({ theme }) => {
        const { wideScreen } = theme.measures;
        const barMeasure = theme.measures.tools.bar;
        return css`
            display: flex;
            justify-content: space-between;
            @media ${wideScreen} {
                padding-top: ${remOutput(barMeasure.padding)};
                padding-bottom: ${remOutput(barMeasure.padding)};
            }
        `;
    }}
`;
