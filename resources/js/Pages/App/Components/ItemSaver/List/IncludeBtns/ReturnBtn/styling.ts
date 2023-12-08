import { ArrowIcon } from '@/Pages/App/Components/ArrowIcon';
import { remOutput } from '@/libraries/toolbox/Styling';
import { css, styled } from 'styled-components';

export const ReturnItemIncludedBtn_ = styled.button`
    ${({ theme }) => {
        const {
            btns: { return: returnMeasure },
        } = theme.measures.itemSaver.list.includeItem;
        return css`
            border-radius: ${remOutput(returnMeasure.borderRadius)};
        `;
    }}
`;

export const ArrowIcon_ = styled(ArrowIcon)`
    ${({ theme }) => {
        const iconTheme = theme.itemSaver.list.includeItem.btns.return;
        const {
            btns: {
                return: { icon: iconMeasure },
            },
        } = theme.measures.itemSaver.list.includeItem;
        return css`
            cursor: pointer;
            width: ${remOutput(iconMeasure.width)};
            transform: rotate(${iconMeasure.transform.rotate});
            border-radius: ${remOutput(iconMeasure.borderRadius)};

            path {
                fill: ${iconTheme.icon.fill};
                stroke: ${iconTheme.icon.stroke};
            }
        `;
    }}
`;
