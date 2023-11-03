import { Container_ } from '@/Pages/App/routes/styling';
import { remOutput } from '@/libraries';
import { css, styled } from 'styled-components';

export const ContainerCustomer_ = styled(Container_)`
    ${({ theme }) => {
        const containerMeasure = theme.measures.customer.container.wide;
        const containerTheme = theme.customer.container;
        return css`
            gap: ${remOutput(containerMeasure.gap)};
            color: ${containerTheme.color};
        `;
    }}
`;
