import { UploadIcon } from '@/Pages/App/libraries/icons/asynchronous';
import { remOutput } from '@/libraries/toolbox/Styling';
import { css, styled } from 'styled-components';

export const FileUpload_ = styled.div`
    ${({ theme }) => {
        const containerMeasure = theme.measures.photoFile.container;
        const { heading: headingMeasure } = containerMeasure;
        return css`
            display: flex;
            text-align: center;
            padding: ${remOutput(containerMeasure.padding)};
            position: relative;
            width: ${remOutput(containerMeasure.width)};
            height: ${remOutput(containerMeasure.height)};
            border-width: ${remOutput(containerMeasure.border.width)};
            border-style: solid;
            border-radius: ${remOutput(containerMeasure.borderRadius)};
            margin-left: ${remOutput(containerMeasure.marginLeft)};
            cursor: pointer;

            h3 {
                font-size: ${remOutput(headingMeasure.fontSize)};
                margin: 0 auto;
                display: block;
                max-width: ${remOutput(headingMeasure.maxWidth)};
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
                cursor: pointer;
                line-height: ${headingMeasure.lineHeight};
            }
        `;
    }}
`;

export const UploadIcon_ = styled(UploadIcon)`
    ${({ theme }) => {
        const { icon: iconMeasure } = theme.measures.photoFile;
        const { icon: iconTheme } = theme.photoFile;
        return css`
            flex: 0 0 ${remOutput(iconMeasure.flexBasis)};
            height: ${iconMeasure.height};
            cursor: pointer;
            fill: ${iconTheme.fill};
        `;
    }}
`;

export const InputFile_ = styled.input.attrs({ type: 'file', name: 'photo' })`
    ${({ theme }) => {
        const { input: inputMeasure } = theme.measures.photoFile;
        return css`
            position: absolute;
            height: ${inputMeasure.height};
            width: calc(100% - ${remOutput(inputMeasure.width.diff)});
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            margin: auto;
            opacity: 0;
            display: block;
            cursor: pointer;
            font-size: 0;
        `;
    }}
`;
