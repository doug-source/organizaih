import { remOutput } from '@/libraries/toolbox/Styling';
import { css, styled } from 'styled-components';

export const SelectorsBox_ = styled.div`
    ${({ theme }) => {
        const boxMeasure = theme.measures.selectorsBox;
        const { wideScreen } = theme.measures;
        return css`
            display: flex;
            justify-content: space-between;
            @media ${wideScreen} {
                justify-content: flex-start;
                gap: ${remOutput(boxMeasure.gap)};
            }
        `;
    }}
`;
