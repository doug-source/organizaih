import { FormItem_ } from '@/Pages/App/Components/FormItem/styling';
import { extractThemeNumber, remOutput } from '@/libraries/toolbox/Styling';
import { fonts } from '@/settings';
import { css, styled } from 'styled-components';

export const FutureItemData_ = styled.div`
    ${({ theme }) => {
        const itemDataMeasure = theme.measures.itemEditor.section.item.itemData;
        return css`
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            height: ${itemDataMeasure.height};
            min-width: ${remOutput(itemDataMeasure.minWidth)};
            gap: ${remOutput(itemDataMeasure.gap)};
        `;
    }}
`;

export const FutureItemDataInputs_ = styled.div`
    ${({ theme }) => {
        const {
            itemData: { dataInputs: dataInputsMeasure },
        } = theme.measures.itemEditor.section.item;
        return css`
            display: flex;
            flex-wrap: wrap;
            flex: 1;
            gap: ${remOutput(dataInputsMeasure.gap)};

            .form--field_price:disabled {
                cursor: not-allowed;
            }

            ${FormItem_} {
                display: flex;
                flex-direction: column;
                justify-content: center;
                min-width: ${remOutput(dataInputsMeasure.input.minWidth)};
            }
        `;
    }}
`;

export const GeneralItem_ = styled.div`
    ${({ theme }) => {
        const {
            itemData: { generalItem: generalItemMeasure },
        } = theme.measures.itemEditor.section.item;
        return css`
            position: relative;
            border-radius: ${remOutput(generalItemMeasure.borderRadius)};
        `;
    }}
`;

export const GeneralItemData_ = styled.div`
    ${({ theme }) => {
        const {
            generalItem: { data: itemDataMeasure },
        } = theme.measures.itemEditor.section.item.itemData;
        const {
            generalItem: { data: itemDataTheme },
        } = theme.itemEditor.section.item.itemData;
        return css`
            display: flex;
            background: ${itemDataTheme.bg};
            color: ${itemDataTheme.color};
            font-weight: bold;
            border-radius: ${remOutput(itemDataMeasure.borderRadius)};
            border-width: ${remOutput(
                extractThemeNumber(theme, itemDataMeasure.border.width),
            )};
            border-style: solid;
            border-color: ${itemDataTheme.border.color};
        `;
    }}
`;

const GeneralItemPack = styled.div`
    ${({ theme }) => {
        const {
            generalItem: { pack: packMeasure },
        } = theme.measures.itemEditor.section.item.itemData;
        return css`
            padding: ${remOutput(packMeasure.padding)};
            font-size: ${remOutput(packMeasure.fontSize)};
            font-family: ${fonts.family[2]};
        `;
    }}
`;

export const GeneralItemLabel_ = styled(GeneralItemPack)`
    line-height: normal;
`;

export const GeneralItemValue_ = styled(GeneralItemPack)`
    ${({ theme }) => {
        const {
            pack: { value: valueMeasure },
        } = theme.measures.itemEditor.section.item.itemData.generalItem;
        const {
            pack: { value: valueTheme },
        } = theme.itemEditor.section.item.itemData.generalItem;
        return css`
            border-top-right-radius: ${remOutput(valueMeasure.borderRadius)};
            border-bottom-right-radius: ${remOutput(valueMeasure.borderRadius)};
            background: ${valueTheme.bg};
            text-align: left;
            flex: 1;
            display: flex;
            align-self: stretch;
            align-items: center;
        `;
    }}
`;
