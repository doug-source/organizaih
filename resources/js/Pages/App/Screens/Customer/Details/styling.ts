import {
    DefineItem,
    DefineItemValue_,
} from '@/Pages/App/Components/DefineItem';
import {
    defineValueTextColor,
    makeLinearGradientStyle,
} from '@/Pages/App/Screens/Customer/Details/libraries';
import { css, styled } from 'styled-components';

type DefineItemCustomerProps = {
    $sex: string;
};

export const DefineItemCustomer_ = styled(DefineItem)<DefineItemCustomerProps>`
    ${({ theme, $sex }) => css`
        background: ${makeLinearGradientStyle(theme, $sex)};

        ${DefineItemValue_} {
            color: ${defineValueTextColor(theme, $sex)};
        }
    `}
`;
