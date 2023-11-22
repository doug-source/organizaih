import { UsersIcon } from '@/Pages/App/libraries/icons/asynchronous';
import { css, styled } from 'styled-components';

export const UsersSVG_ = styled(UsersIcon)`
    ${({ theme }) => {
        const {
            navItem: {
                link: {
                    svg: { user: userTheme },
                },
            },
        } = theme.header.dashboard.navbarNav;
        return css`
            path.front-head,
            path.front-body {
                fill: ${userTheme.path.fill.front};
            }
            path.back-head,
            path.back-body {
                fill: ${userTheme.path.fill.back};
            }
        `;
    }}
`;
