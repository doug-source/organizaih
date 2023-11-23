import { mixinPhoto } from '@/Pages/App/Components/DefinePhoto';
import { AnonymousSVG } from '@/Pages/App/libraries/icons/asynchronous';
import { css, styled } from 'styled-components';

export const AnonymousIcon_ = styled(AnonymousSVG)`
    ${mixinPhoto}
    ${({ theme }) => {
        const svgTheme = theme.anonymous.details.photo.svg;
        return css`
            fill: ${svgTheme.fill};
        `;
    }}
`;
