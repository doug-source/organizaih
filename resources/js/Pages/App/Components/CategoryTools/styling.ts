import { InputRequest, Label_ } from '@/Pages/App/Components/InputRequest';
import { remOutput } from '@/libraries';
import { css, styled } from 'styled-components';

export const InputRequest_ = styled(InputRequest)`
    ${({ theme }) => {
        const inputMeasure = theme.measures.product.category.tools.inputRequest;
        return css`
            ${Label_} {
                display: flex;
                gap: ${remOutput(inputMeasure.label.gap)};
            }
        `;
    }}
`;

export const CategoryTools_ = styled.div`
    ${({ theme }) => {
        const toolsMeasure = theme.measures.product.category.tools;
        const { wideScreen } = theme.measures;
        return css`
            display: flex;
            flex-wrap: wrap;
            gap: ${remOutput(toolsMeasure.gap)};
            margin-top: ${remOutput(toolsMeasure.margin.top)};

            @media ${wideScreen} {
                justify-content: space-between;
                gap: ${remOutput(toolsMeasure.wide.gap)};
                margin-top: ${remOutput(toolsMeasure.wide.margin.top)};
            }
        `;
    }}
`;
