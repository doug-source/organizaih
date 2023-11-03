import { remOutput } from '@/libraries/toolbox/Styling';
import { css, styled } from 'styled-components';

export const FutureItem_ = styled.div`
    ${({ theme }) => {
        const itemMeasure = theme.measures.itemEditor.section.item;
        return css`
            display: flex;
            align-items: flex-start;
            position: relative;
            height: ${itemMeasure.height};
            gap: ${remOutput(itemMeasure.gap)};
        `;
    }}
`;

export const FutureSection_ = styled.div`
    ${({ theme }) => {
        const sectionMeasure = theme.measures.itemEditor.section;
        const sectionTheme = theme.itemEditor.section;
        return css`
            flex: 1;
            border-width: ${remOutput(sectionMeasure.border.width)};
            border-style: solid;
            border-color: ${sectionTheme.border.color};
            border-radius: ${remOutput(sectionMeasure.borderRadius)};
            padding: ${remOutput(sectionMeasure.padding)};
        `;
    }}
`;
