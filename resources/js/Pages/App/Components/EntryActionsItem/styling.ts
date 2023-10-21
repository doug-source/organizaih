import { remOutput } from '@/libraries/toolbox/Styling';
import { css, styled } from 'styled-components';

export const EntryActionsItem_ = styled.div`
    ${({ theme }) => {
        const { measures } = theme;
        return css`
            right: ${remOutput(measures.entryActionsItem.right)};
            position: absolute;
            left: auto;
            display: none;
            @media ${measures.wideScreen} {
                display: block;
            }
            @media ${measures.mediumScreen} {
                display: block;
            }
        `;
    }}
`;
