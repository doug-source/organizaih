import { InventorySVG } from '@/Pages/App/libraries/icons/asynchronous';
import { css, styled } from 'styled-components';

export const InventoryIcon_ = styled(InventorySVG)`
    ${({ theme }) => {
        const {
            inventoryIcon: { paperLeaf: leafTheme },
        } = theme.header.dashboard.dashboardItem;
        return css`
            rect.paperLeaf {
                fill: ${leafTheme.fill};
            }
        `;
    }}
`;
