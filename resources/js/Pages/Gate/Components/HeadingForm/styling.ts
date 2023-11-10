import { remOutput } from '@/libraries/toolbox/Styling';
import { css, styled } from 'styled-components';

type HeadingProps_ = {
    $marginTop: number;
    $marginBottom: number;
};

export const Heading_ = styled.h3<HeadingProps_>`
    ${({ $marginTop, $marginBottom }) => {
        return css`
            text-align: center;
            margin-top: ${remOutput($marginTop)};
            margin-bottom: ${remOutput($marginBottom)};
        `;
    }}
`;
