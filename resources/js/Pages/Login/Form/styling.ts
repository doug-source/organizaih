import { TextInput } from '@/Auth';
import { Button, LabelTextBtn_ } from '@/Components/Button';
import { remOutput } from '@/libraries';
import { css, styled } from 'styled-components';

export const SecondRow_ = styled.div`
    ${({ theme }) => {
        const secRowMeasure = theme.login.measures.secondRow;
        return css`
            margin-top: ${remOutput(secRowMeasure.margin.top)};
        `;
    }}
`;

export const ThirdRow_ = styled.div`
    ${({ theme }) => {
        const thirdRowMeasure = theme.login.measures.thirdRow;
        return css`
            display: block;
            margin-top: ${remOutput(thirdRowMeasure.margin.top)};
        `;
    }}
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

export const TextInput_ = styled(TextInput)`
    ${({ theme }) => {
        const inputMeasure = theme.login.measures.input;
        return css`
            display: block;
            margin-top: ${remOutput(inputMeasure.margin.top)};
            width: ${inputMeasure.width};
        `;
    }}
`;

export const FourthRow_ = styled.div`
    ${({ theme }) => {
        const fourMeasure = theme.login.measures.fourthRow;
        return css`
            display: flex;
            margin-top: ${remOutput(fourMeasure.margin.top)};
            justify-content: flex-end;
            align-items: center;
        `;
    }}
`;

export const Link_ = styled.a`
    ${({ theme }) => {
        const forgotPassTheme = theme.login.forgotPassword;
        const linkMeasure = theme.login.measures.link;
        return css`
            border-radius: ${remOutput(linkMeasure.borderRadius)};
            font-size: ${remOutput(linkMeasure.fontSize)};
            line-height: ${remOutput(linkMeasure.lineHeight)};
            color: ${forgotPassTheme.color};
            text-decoration: underline;

            &:hover {
                color: ${forgotPassTheme.hover.color};
            }
        `;
    }}
`;

export const Button_ = styled(Button)`
    ${({ theme }) => {
        const btnTheme = theme.login.btn;
        const btnMeasure = theme.login.measures.auth.form.btn;
        return css`
            background: ${btnTheme.bg};
            box-shadow: ${btnTheme.boxShadow};
            border-width: ${remOutput(btnMeasure.border.width)};
            margin-top: ${remOutput(btnMeasure.margin.top)};
            &:active {
                box-shadow: ${btnTheme.active.boxShadow};
            }

            ${LabelTextBtn_} {
                color: ${btnTheme.text.color};
            }
        `;
    }}
`;
