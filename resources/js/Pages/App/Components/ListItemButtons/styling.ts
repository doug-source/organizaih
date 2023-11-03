import { TextItem_ } from '@/Pages/App/Components/ListItem';
import { remOutput } from '@/libraries';
import { css, styled } from 'styled-components';

export const BtnsItemContainer_ = styled.div`
    ${({ theme }) => {
        const {
            btns: { container: containerMeasure },
        } = theme.measures.list.dataListItem;
        return css`
            display: flex;
            flex: ${containerMeasure.flex};
            justify-content: flex-end;
            min-width: ${remOutput(containerMeasure.minWidth)};
        `;
    }}
`;

export const BtnsItem_ = styled(TextItem_)`
    ${({ theme }) => {
        const btnsMeasure = theme.measures.list.dataListItem.btns;
        return css`
            display: flex;
            flex: 0 1 auto;
            overflow: visible;
            gap: ${remOutput(btnsMeasure.item.gap)};

            svg {
                width: ${remOutput(btnsMeasure.svg.size)};
            }
        `;
    }}
`;
