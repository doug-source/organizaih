import { remOutput } from '@/libraries/toolbox/Styling';
import { css, styled } from 'styled-components';

export const Values_ = styled.div`
    ${({ theme }) => {
        const valuesMeasure = theme.measures.itemSaver.list.data.values;
        return css`
            display: flex;
            justify-content: space-around;
            font-size: ${remOutput(valuesMeasure.fontSize)};
            gap: ${remOutput(valuesMeasure.gap)};
        `;
    }}
`;

export const Data_ = styled.div`
    text-align: center;
`;
