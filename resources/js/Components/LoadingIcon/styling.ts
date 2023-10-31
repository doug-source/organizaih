import { remOutput } from '@/libraries/toolbox/Styling';
import ReactLoading from 'react-loading';
import { css, styled } from 'styled-components';

export const LoadingIcon_ = styled(ReactLoading)`
    ${({ theme }) => {
        const iconMeasure = theme.login.measures.loadingIcon.icon;
        const iconTheme = theme.login.loadingIcon;
        return css`
            position: absolute;
            left: 0;
            right: 0;
            margin-left: auto;
            margin-right: auto;
            svg {
                position: absolute;
                top: ${remOutput(iconMeasure.top)};
                height: ${iconMeasure.height};
                fill: ${iconTheme.fill};
            }
        `;
    }}
`;
