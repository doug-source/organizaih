import { remOutput } from '@/libraries';
import { fonts } from '@/settings';
import { css, styled } from 'styled-components';

export const Empty_ = styled.div`
    ${({ theme }) => {
        const emptyTheme = theme.list.empty;
        const emptyMeasure = theme.measures.list.empty;
        return css`
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            color: ${emptyTheme.color};
            background-color: ${emptyTheme.bg.color};
            background-image: ${emptyTheme.bg.image};

            gap: ${remOutput(emptyMeasure.gap)};
            padding-top: ${remOutput(emptyMeasure.padding.top)};
            padding-bottom: ${remOutput(emptyMeasure.padding.bottom)};
            padding-left: ${remOutput(emptyMeasure.padding.left)};
            padding-right: ${remOutput(emptyMeasure.padding.right)};

            border-radius: ${remOutput(emptyMeasure.border.radius)};
            font-family: ${fonts.family[2]};
        `;
    }}
`;
