import { remOutput } from '@/libraries';
import { css, styled } from 'styled-components';

export const mixinPhoto = css`
    ${({ theme }) => {
        const definePhotoMeasure = theme.measures.definePhoto;
        return css`
            background-repeat: no-repeat;
            background-size: 100% 100%;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 1;
            display: block;
            width: ${remOutput(definePhotoMeasure.size)};
            height: ${remOutput(definePhotoMeasure.size)};
            margin: ${remOutput(definePhotoMeasure.margin)};
            border-radius: ${remOutput(definePhotoMeasure.border.radius)};
        `;
    }}
`;

export const PhotoItem_ = styled.span<{ $url: string }>`
    ${mixinPhoto}
    background-image: ${({ $url }) => `url('/storage/app/${$url}')`};
`;
