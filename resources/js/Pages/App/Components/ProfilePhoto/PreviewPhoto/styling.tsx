import { remOutput } from '@/libraries';
import { css, styled } from 'styled-components';

export const PhotoPreview_ = styled.div`
    ${({ theme }) => {
        const previewMeasure = theme.measures.profilePhoto.photoPreview;
        const previewTheme = theme.profilePhoto.previewPhoto;
        return css`
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: ${remOutput(previewMeasure.marginRight)};
            position: absolute;
            top: 0;

            svg {
                width: ${remOutput(previewMeasure.svg.width)};
                height: ${remOutput(previewMeasure.svg.height)};
                fill: ${previewTheme.personCircle.fill};
            }
        `;
    }}
`;

export const PreviewImg_ = styled.img.attrs({ alt: '' })`
    ${({ theme }) => {
        const previewMeasure = theme.measures.profilePhoto.photoPreview;
        return css`
            width: ${remOutput(previewMeasure.svg.width)};
            height: ${remOutput(previewMeasure.svg.height)};
        `;
    }}
`;
