import { getSvgSize } from '@/Pages/App/Components/AnonymousListIcon/libraries';
import { AnonymousSVG } from '@/Pages/App/libraries/icons/asynchronous';
import { css, styled } from 'styled-components';

export const AnonymousIcon_ = styled(AnonymousSVG)`
    ${({ theme }) => {
        const size = getSvgSize(theme);
        return css`
            width: ${size};
            height: ${size};
            fill: ${theme.anonymous.list.photo.svg.fill};
        `;
    }}
`;
