import { SelectCustomerSVG } from '@/Pages/App/libraries/icons/asynchronous';
import { remOutput } from '@/libraries/toolbox/Styling';
import { css, styled } from 'styled-components';

export const SelectCustomerSVG_ = styled(SelectCustomerSVG)`
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
