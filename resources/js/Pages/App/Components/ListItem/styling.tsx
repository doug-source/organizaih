import { DataList_ } from '@/Pages/App/Components/List/styling';
import { extractThemeNumber, remOutput } from '@/libraries';
import { fonts } from '@/settings';
import { NavLink } from 'react-router-dom';
import { css, styled } from 'styled-components';

export const TextItem_ = styled.div`
    display: flex;
    align-items: center;
    overflow: hidden;
    flex: 1;
`;

export const TextContent_ = styled.div`
    cursor: pointer;
    overflow: hidden;
`;

export const NavLink_ = styled(NavLink)`
    ${({ theme }) => {
        const itemTheme = theme.list.item;
        return css`
            color: inherit;
            text-decoration: none;
            white-space: nowrap;
            display: block;
            overflow: hidden;
            text-overflow: ellipsis;

            &:hover {
                color: ${itemTheme.hover.color};
            }
        `;
    }}
`;

export const DataListItem_ = styled.div`
    ${({ theme }) => {
        const itemMeasure = theme.measures.list.dataListItem;
        const itemTheme = theme.list.dataListItem;
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
