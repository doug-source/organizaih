import { remOutput } from '@/libraries';
import { fonts } from '@/settings';
import { css, styled } from 'styled-components';

export const PagTotal_ = styled.div`
    ${({ theme }) => {
        const pagesTheme = theme.measures.pagination.pages;
        return css`
            text-align: center;
            padding-top: ${remOutput(pagesTheme.total.padding)};
        `;
    }}
`;

export const PaginationContainer_ = styled.div`
    font-family: ${fonts.family[1]};
`;
