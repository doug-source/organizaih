import { TextInput } from '@/Auth';
import { Button, LabelTextBtn_ } from '@/Components/Button';
import { remOutput } from '@/libraries';
import { css, styled } from 'styled-components';

export const Row_ = styled.div<{ $show?: boolean }>`
    ${({ theme, $show = true }) => {
        const rowMeasure = theme.login.measures.row;
        return css`
            margin-top: ${remOutput(rowMeasure.margin.top)};
            ${!$show &&
            css`
                &:first-of-type {
                    display: none;
                }
            `}
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

export const RememberRow_ = styled(Row_)`
    ${({ theme }) => {
        const fourMeasure = theme.login.measures.fourthRow;
        return css`
            display: flex;
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
