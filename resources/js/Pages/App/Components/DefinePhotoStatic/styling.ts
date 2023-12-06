import { remOutput } from '@/libraries/toolbox/Styling';
import { css, styled } from 'styled-components';

export const PhotoItem_ = styled.div<{ $url: string }>`
    ${({ theme, $url }) => {
        const definePhotoMeasure = theme.measures.definePhoto;
        return css`
            background-image: url('/storage/app/${$url}');
            background-repeat: no-repeat;
            background-size: 100% 100%;
            width: ${remOutput(definePhotoMeasure.size)};
            height: ${remOutput(definePhotoMeasure.size)};
        `;
    }}
`;
