import {
    DefineItem,
    DefineItemValue_,
} from '@/Pages/App/Components/DefineItem';
import {
    defineValueTextColor,
    makeLinearGradientStyle,
} from '@/Pages/App/Screens/Customer/Details/libraries';
import { remOutput } from '@/libraries';
import { css, styled } from 'styled-components';

type DefineItemCustomerProps = {
    $sex: string;
};

export const DetailsContainer_ = styled.div`
    ${({ theme }) => {
        return css`
            display: flex;
            flex-direction: column;
            gap: ${remOutput(theme.measures.customer.details.container.gap)};
        `;
    }}
`;

export const DefineItemCustomer_ = styled(DefineItem)<DefineItemCustomerProps>`
    ${({ theme, $sex }) => css`
        background: ${makeLinearGradientStyle(theme, $sex)};

        ${DefineItemValue_} {
            color: ${defineValueTextColor(theme, $sex)};
        }
    `}
`;
