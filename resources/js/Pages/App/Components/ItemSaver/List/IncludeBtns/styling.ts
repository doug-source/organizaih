import { css, styled } from 'styled-components';

export const Btns_ = styled.div`
    ${({ theme }) => {
        const { wideScreen } = theme.measures;
        return css`
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            display: none;
            justify-content: space-between;

            @media ${wideScreen} {
                display: flex;
            }
        `;
    }}
`;
