import { InventorySVG } from '@/Pages/App/libraries';
import { css, styled } from 'styled-components';

export const InventorySVG_ = styled(InventorySVG)`
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
