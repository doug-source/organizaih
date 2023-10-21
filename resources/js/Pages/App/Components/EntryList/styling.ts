import { remOutput } from '@/libraries/toolbox/Styling';
import { fonts } from '@/settings';
import { css, styled } from 'styled-components';

export const EntryList_ = styled.div`
    ${({ theme }) => {
        return css`
            display: flex;
            flex-direction: column;
            font-family: ${fonts.family[6]};
            flex: 1;
            gap: ${remOutput(theme.measures.entryList.gap)};
        `;
    }}
`;
