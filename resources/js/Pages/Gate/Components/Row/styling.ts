import { remOutput } from '@/libraries/toolbox/Styling';
import { css, styled } from 'styled-components';

export type RowProps_ = { $show?: boolean };

export const Row_ = styled.div<RowProps_>`
    ${({ theme, $show = true }) => {
        const rowMeasure = theme.login.measures.row;
        return css`
            margin-top: ${remOutput(rowMeasure.margin.top)};
            ${!$show &&
            css`
                &:first-of-type {
                    display: none;
                }
            `}
        `;
    }}
`;
