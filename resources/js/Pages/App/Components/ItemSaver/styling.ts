import { remOutput } from '@/libraries/toolbox/Styling';
import { css, styled } from 'styled-components';

export const ItemsIncludedSection_ = styled.div`
    ${({ theme }) => {
        const sectionTheme = theme.itemSaver.section;
        const sectionMeasure = theme.measures.itemSaver.section;
        return css`
            flex: 1;
            border-width: ${remOutput(sectionMeasure.border.width)};
            border-style: solid;
            border-color: ${sectionTheme.border.color};
            border-radius: ${remOutput(sectionMeasure.borderRadius)};
        `;
    }}
`;
