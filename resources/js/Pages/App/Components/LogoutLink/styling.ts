import { LogoutIcon } from '@/Pages/App/Components/LogoutIcon';
import { css, styled } from 'styled-components';

export const FormLogout_ = styled.form``;

export const ExitLink_ = styled.a``;

export const LogoutIcon_ = styled(LogoutIcon)`
    ${({ theme }) => {
        const pathTheme = theme.header.topItem.svg.path;
        return css`
            path {
                fill: ${pathTheme.fill};
            }
        `;
    }}
`;
