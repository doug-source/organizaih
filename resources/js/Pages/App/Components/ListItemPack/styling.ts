import { DataList_ } from '@/Pages/App/Components/List/styling';
import { extractThemeNumber, remOutput } from '@/libraries/toolbox/Styling';
import { fonts } from '@/settings';
import { css, styled } from 'styled-components';

export const ListItemContainer_ = styled.div`
    ${({ theme }) => {
        const itemMeasure = theme.measures.list.pack;
        const itemTheme = theme.list.pack;
        return css`
            display: flex;
            justify-content: flex-start;
            align-items: center;
            text-align: center;
            position: relative;
            padding-top: ${remOutput(itemMeasure.padding.top)};
            padding-bottom: ${remOutput(itemMeasure.padding.bottom)};
            padding-left: ${remOutput(itemMeasure.padding.left)};
            padding-right: ${remOutput(itemMeasure.padding.right)};
            font-family: ${fonts.family[2]};
            gap: ${remOutput(itemMeasure.gap)};
            background-color: ${itemTheme.bg.color};
            color: ${itemTheme.color};

            ${DataList_} & ~ & {
                border-top-width: ${remOutput(
                    extractThemeNumber(theme, itemMeasure.border.width),
                )};
                border-top-style: solid;
                border-top-color: ${itemTheme.border.top.color};
            }
        `;
    }}
`;
