import { remOutput } from '@/libraries';
import { css, styled } from 'styled-components';

export const GroupBar_ = styled.div`
    ${({ theme }) => {
        const groupsMeasure = theme.measures.pagination.groups;
        return css`
            display: flex;
            align-items: center;
            gap: ${remOutput(groupsMeasure.gap)};
            padding: 0 1%;
        `;
    }}
`;
