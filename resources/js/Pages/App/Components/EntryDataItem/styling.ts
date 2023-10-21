import { remOutput } from '@/libraries/toolbox/Styling';
import { css, styled } from 'styled-components';

export const EntryDataItem_ = styled.div`
    ${({ theme }) => {
        return css`
            display: flex;
            gap: ${remOutput(theme.measures.entryDataItem.gap)};
        `;
    }}
`;
