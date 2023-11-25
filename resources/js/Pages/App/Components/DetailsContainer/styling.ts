import { remOutput } from '@/libraries/toolbox/Styling';
import { css, styled } from 'styled-components';

type DetailsContainerProps_ = {
    $gapItems?: number;
};

export const DetailsContainer_ = styled.div<DetailsContainerProps_>`
    ${({ theme, $gapItems = theme.measures.details.container.gap }) => {
        return css`
            display: flex;
            flex-direction: column;
            gap: ${remOutput($gapItems)};
        `;
    }}
`;
