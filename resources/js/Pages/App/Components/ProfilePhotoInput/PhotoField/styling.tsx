import { remOutput } from '@/libraries';
import { fonts } from '@/settings';
import { css, styled } from 'styled-components';

export const PhotoField_ = styled.input.attrs({ type: 'file', name: 'photo' })`
    ${({ theme }) => {
        const fieldMeasure = theme.measures.profilePhoto.photoField;
        return css`
            margin-left: ${remOutput(fieldMeasure.marginLeft)};
            font-size: ${remOutput(fieldMeasure.fontSize)};
            display: block;
            font-family: ${fonts.family[1]};
        `;
    }}
`;
