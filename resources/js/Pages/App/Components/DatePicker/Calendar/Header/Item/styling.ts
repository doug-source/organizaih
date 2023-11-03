import { css, styled } from 'styled-components';

export const HeaderItem_ = styled.span`
    ${({ theme }) => {
        const itemTheme = theme.datepicker.calendar.header.item;
        return css`
            select {
                cursor: pointer;
                border-width: 0;
                background-color: ${itemTheme.bg};
                --tw-ring-color: ${itemTheme.bg};
                outline: none;
            }
        `;
    }}
`;
