import { DefaultForm_ } from '@/Pages/App/Components/DefaultForm';
import { remOutput } from '@/libraries';
import { css, styled } from 'styled-components';

export const DefaultFormInventory_ = styled(DefaultForm_)`
    ${({ theme }) => {
        const baseTheme = theme.measures.inventory.form.base;
        return css`
            height: auto;
            padding-top: ${remOutput(baseTheme.padding.top)};
        `;
    }}
`;
