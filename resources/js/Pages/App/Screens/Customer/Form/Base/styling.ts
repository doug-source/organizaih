import { Input_ } from '@/Components/Input';
import { FormItem, Label_ } from '@/Pages/App/Components/FormItem';
import { remOutput } from '@/libraries';
import { css, styled } from 'styled-components';

export const InputNumber_ = styled(Input_)`
    ${({ theme }) => {
        return css`
            &&:focus {
                box-shadow: ${theme.generic.input.boxShadow};
            }
        `;
    }}
`;

export const FormItemPhoto_ = styled(FormItem)`
    ${({ theme }) => {
        const formFieldMeasure = theme.measures.customer.form.base.formField;
        return css`
            ${Label_} {
                margin-left: ${remOutput(
                    formFieldMeasure.photo.label.margin.left,
                )};
            }
        `;
    }}
`;
