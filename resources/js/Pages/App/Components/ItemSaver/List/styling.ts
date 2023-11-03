import { remOutput } from '@/libraries/toolbox/Styling';
import { css, styled } from 'styled-components';

export const ItemsIncludedSaved_ = styled.div`
    ${({ theme }) => {
        const listMeasure = theme.measures.itemSaver.list;
        return css`
            height: ${listMeasure.height};
            display: flex;
            flex-flow: wrap;
            align-items: flex-start;
            padding: ${remOutput(listMeasure.padding)};
            gap: ${remOutput(listMeasure.gap)};
        `;
    }}
`;

export const ItemsIncludedSavedItem_ = styled.div`
    ${({ theme }) => {
        const includeItemTheme = theme.itemSaver.list.includeItem;
        const includeItemMeasure = theme.measures.itemSaver.list.includeItem;
        return css`
            user-select: none;
            display: flex;
            flex-direction: column;
            position: relative;
            align-items: center;
            background: ${includeItemTheme.bg};
            border-width: ${remOutput(includeItemMeasure.border.width)};
            border-style: solid;
            border-color: ${includeItemTheme.border.color};
            max-width: ${includeItemMeasure.maxWidth};
            border-radius: ${remOutput(includeItemMeasure.borderRadius)};
            padding-left: ${remOutput(includeItemMeasure.padding)};
            padding-right: ${remOutput(includeItemMeasure.padding)};
        `;
    }}
`;
