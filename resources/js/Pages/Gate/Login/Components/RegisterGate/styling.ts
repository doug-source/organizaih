import { Row } from '@/Pages/Gate/Components/Row';
import { Link_ } from '@/Pages/Gate/Login/styling';
import { remOutput } from '@/libraries/toolbox/Styling';
import { css, styled } from 'styled-components';

export const RegisterGateRow_ = styled(Row)`
    ${Link_} {
        text-decoration: none;
        cursor: pointer;
    }
`;

export const RegisterGateForm_ = styled.form`
    ${({ theme }) => {
        const rowMeasure = theme.login.measures.newAccountRow;
        return css`
            position: absolute;
            margin-top: ${remOutput(rowMeasure.margin.top)};
            top: calc(100% + ${remOutput(rowMeasure.top.diff)});
            bottom: auto;
            left: ${remOutput(rowMeasure.left)};
            right: auto;
        `;
    }}
`;

export const RegisterBtn_ = styled(Link_)`
    border-width: 0;
    background-color: transparent;
`;
