import { Input_ } from '@/Components/Input';
import { ErrorMsg_, FormItem, Label_ } from '@/Pages/App/Components/FormItem';
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
        const { photo: photoMeasure } =
            theme.measures.customer.form.base.formField;
        return css`
            ${Label_} {
                margin-left: ${remOutput(photoMeasure.label.margin.left)};
            }
            ${ErrorMsg_} {
                margin-left: ${remOutput(photoMeasure.error.margin.left)};
            }
        `;
    }}
`;
