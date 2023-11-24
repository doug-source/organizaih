import { remOutput } from '@/libraries/toolbox/Styling';
import { css, styled } from 'styled-components';

export const BtnsItemContainer_ = styled.div`
    ${({ theme }) => {
        const {
            btns: { container: containerMeasure },
        } = theme.measures.list;
        return css`
            display: flex;
            flex: ${containerMeasure.flex};
            justify-content: flex-end;
            min-width: ${remOutput(containerMeasure.minWidth)};
        `;
    }}
`;

export const BtnsItem_ = styled.div`
    ${({ theme }) => {
        const btnsMeasure = theme.measures.list.btns;
        return css`
            display: flex;
            align-items: center;
            flex: 0 1 auto;
            overflow: visible;
            gap: ${remOutput(btnsMeasure.item.gap)};

            svg {
                width: ${remOutput(btnsMeasure.svg.size)};
            }
        `;
    }}
`;
