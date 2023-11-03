import { RemoveRedSVG } from '@/Pages/App/libraries/icons/asynchronous';
import { remOutput } from '@/libraries/toolbox/Styling';
import { css, styled } from 'styled-components';

export const RemoveItemIncludedBtn_ = styled.button`
    ${({ theme }) => {
        const {
            btns: { include: includeMeasure },
        } = theme.measures.itemSaver.list.includeItem;
        return css`
            border-radius: ${remOutput(includeMeasure.borderRadius)};
        `;
    }}
`;

export const RemoveRedSVG_ = styled(RemoveRedSVG)`
    ${({ theme }) => {
        const iconTheme = theme.itemSaver.list.includeItem.btns.include;
        const {
            include: { icon: iconMeasure },
        } = theme.measures.itemSaver.list.includeItem.btns;
        return css`
            cursor: pointer;
            width: ${remOutput(iconMeasure.width)};
            border-radius: ${remOutput(iconMeasure.borderRadius)};

            path {
                fill: ${iconTheme.icon.fill};
            }
        `;
    }}
`;
