import { css, styled } from 'styled-components';

export const Dropdown_ = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 2;
`;

export const Overlay_ = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
`;

export const Content_ = styled.div`
    ${({ theme }) => {
        const contentTheme = theme.datepicker.dropdown.content;
        return css`
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: 2;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: default;
            background-color: ${contentTheme.bg};
        `;
    }}
`;
