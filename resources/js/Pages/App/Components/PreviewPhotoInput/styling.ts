import { remOutput } from '@/libraries';
import { css, styled } from 'styled-components';

export const PhotoPreview_ = styled.div`
    ${({ theme }) => {
        const previewMeasure = theme.measures.previewPhotoInput;
        const previewTheme = theme.previewPhotoInput;
        return css`
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: ${remOutput(previewMeasure.marginRight)};
            position: absolute;
            top: 0;
            bottom: 0;

            svg {
                width: ${remOutput(previewMeasure.svg.width)};
                height: ${remOutput(previewMeasure.svg.height)};
                > * {
                    fill: ${previewTheme.svg.fill};
                }
            }
        `;
    }}
`;

export const PreviewImg_ = styled.img.attrs({ alt: '' })`
    ${({ theme }) => {
        const previewMeasure = theme.measures.previewPhotoInput;
        return css`
            width: ${remOutput(previewMeasure.svg.width)};
            height: ${remOutput(previewMeasure.svg.height)};
        `;
    }}
`;
