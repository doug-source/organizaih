import { remOutput } from '@/libraries';
import { css, styled } from 'styled-components';

export const BackPhotoBtn_ = styled.button`
    ${({ theme }) => {
        const backBtnMeasure = theme.measures.backBtn;
        return css`
            position: absolute;
            z-index: 1;
            margin-left: ${remOutput(backBtnMeasure.margin.left)};
            margin-top: ${remOutput(backBtnMeasure.margin.top)};

            svg {
                width: ${remOutput(backBtnMeasure.svg.size)};
                height: ${remOutput(backBtnMeasure.svg.size)};
            }
        `;
    }}
`;
