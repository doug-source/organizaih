import { SelectProductIcon } from '@/Pages/App/Components/SelectProductIcon';
import { remOutput } from '@/libraries/toolbox/Styling';
import { css, styled } from 'styled-components';

export const SelectProductIcon_ = styled(SelectProductIcon)`
    ${({ theme }) => {
        const selectProductTheme = theme.selectProduct;
        const iconMeasure = theme.measures.selectProduct.icon;
        return css`
            width: ${remOutput(iconMeasure.size)};
            height: ${remOutput(iconMeasure.size)};

            path.box {
                fill: ${selectProductTheme.icon.fill.box};
            }
            path.tape {
                fill: ${selectProductTheme.icon.fill.tape};
            }
            path.hand {
                fill: ${selectProductTheme.icon.fill.hand};
            }
        `;
    }}
`;
