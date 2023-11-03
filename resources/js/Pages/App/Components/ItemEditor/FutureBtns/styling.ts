import { remOutput } from '@/libraries/toolbox/Styling';
import { css, styled } from 'styled-components';

export const Btns_ = styled.div`
    ${({ theme }) => css`
        width: ${remOutput(theme.measures.itemEditor.futureBtns.width)};
        position: absolute;
        top: 0;
        bottom: 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    `}
`;
