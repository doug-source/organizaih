import { FormItem, Label_ } from '@/Pages/App/Components/FormItem';
import { remOutput } from '@/libraries/toolbox/Styling';
import { css, styled } from 'styled-components';

export const FormItemPhoto_ = styled(FormItem)`
    ${({ theme }) => {
        const { photoFormItem } = theme.measures;
        return css`
            ${Label_} {
                margin-left: ${remOutput(photoFormItem.label.margin.left)};
            }
        `;
    }}
`;
