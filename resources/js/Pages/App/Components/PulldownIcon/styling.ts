import { PulldownSVG } from '@/Pages/App/libraries/icons/asynchronous';
import { css, styled } from 'styled-components';

export const PulldownIcon_ = styled(PulldownSVG)`
    ${({ theme }) => {
        const pulldownTheme = theme.header.topItem.pulldown;
        return css`
            .mark {
                fill: ${pulldownTheme.mark.fill};
            }
        `;
    }}
`;
