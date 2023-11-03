import { remOutput } from '@/libraries';
import { css, styled } from 'styled-components';

export const Container_ = styled.div`
    ${({ theme }) => {
        const containerMeasure = theme.measures.main.container;
        return css`
            display: flex;
            flex-direction: column;
            height: calc(100% - ${remOutput(containerMeasure.margin.top)});
            margin-top: ${remOutput(containerMeasure.margin.top)};
            position: relative;
            color: ${theme.routes.container.color};
        `;
    }}
`;
