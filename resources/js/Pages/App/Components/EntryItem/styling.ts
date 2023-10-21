import { remOutput } from '@/libraries/toolbox/Styling';
import { css, styled } from 'styled-components';

export const EntryItem_ = styled.div`
    ${({ theme }) => {
        const entryItemMeasure = theme.measures.entryItem;
        return css`
            display: flex;
            flex-direction: column;
            position: relative;
            justify-content: center;
            padding-top: ${remOutput(entryItemMeasure.padding)};
            padding-bottom: ${remOutput(entryItemMeasure.padding)};
            padding-left: ${remOutput(entryItemMeasure.padding)};
            background-color: ${theme.entryItem.bg};
            &:first-child {
                border-top-right-radius: ${remOutput(
                    entryItemMeasure.first.border.topRight.radius,
                )};
            }
            &:last-child {
                border-bottom-right-radius: ${remOutput(
                    entryItemMeasure.last.border.bottomRight.radius,
                )};
            }
        `;
    }}
`;
