import { SelectProductSVG } from '@/Pages/App/libraries/icons/asynchronous';
import { remOutput } from '@/libraries/toolbox/Styling';
import { css, styled } from 'styled-components';

export const SelectProductSVG_ = styled(SelectProductSVG)`
    ${({ theme }) => {
        const selectProductTheme = theme.selectProduct;
        const iconMeasure = theme.measures.selectProduct.icon;
        return css`
            position: relative;
            top: ${remOutput(iconMeasure.top)};
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
