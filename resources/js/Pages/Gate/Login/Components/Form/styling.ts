import { Row } from '@/Pages/Gate/Components/Row';
import { Link_ } from '@/Pages/Gate/Login/styling';
import { remOutput } from '@/libraries';
import { css, styled } from 'styled-components';

export const FormTagMain_ = styled.form`
    position: relative;
`;

export const ThirdRowLabel_ = styled.label`
    display: flex;
    align-items: center;
`;

export const ThirdRowText_ = styled.span`
    ${({ theme }) => {
        const rememberTheme = theme.login.remember;
        const rememberMeasure = theme.login.measures.remember;
        return css`
            margin-left: ${remOutput(rememberMeasure.marginLeft)};
            font-size: ${remOutput(rememberMeasure.fontSize)};
            line-height: ${remOutput(rememberMeasure.lineHeight)};
            color: ${rememberTheme.color};
        `;
    }}
`;

export const RememberRow_ = styled(Row)`
    ${({ theme }) => {
        const fourMeasure = theme.login.measures.fourthRow;
        return css`
            display: flex;
            justify-content: flex-end;
            align-items: center;
        `;
    }}
`;

export const RegisterGateRow_ = styled(Row)`
    ${({ theme }) => {
        const rowMeasure = theme.login.measures.newAccountRow;
        return css`
            margin-top: ${remOutput(rowMeasure.margin.top)};
            position: absolute;
            top: calc(100% + ${remOutput(rowMeasure.top.diff)});
            bottom: auto;
            left: ${remOutput(rowMeasure.left)};
            right: auto;
            ${Link_} {
                text-decoration: none;
            }
        `;
    }}
`;

export const ForgotPasswordLink_ = styled(Link_)`
    && {
        text-decoration: underline;
    }
`;
