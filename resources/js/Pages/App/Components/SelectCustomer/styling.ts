import { SelectCustomerIcon } from '@/Pages/App/Components/SelectCustomerIcon';
import { remOutput } from '@/libraries/toolbox/Styling';
import { css, styled } from 'styled-components';

export const SelectCustomerIcon_ = styled(SelectCustomerIcon)`
    ${({ theme }) => {
        const iconsTheme = theme.selectCustomer.icon;
        const iconMeasure = theme.measures.selectCustomer.icon;

        return css`
            width: ${remOutput(iconMeasure.size)};
            height: ${remOutput(iconMeasure.size)};
            path.person {
                fill: ${iconsTheme.fill.person};
            }
            path.hand {
                fill: ${iconsTheme.fill.hand};
            }
        `;
    }}
`;
