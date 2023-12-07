import { RemoveRedIcon } from '@/Pages/App/Components/RemoveRedIcon';
import { remOutput } from '@/libraries/toolbox/Styling';
import { css, styled } from 'styled-components';

export const RemoveFutureBtn_ = styled.button`
    ${({ theme }) => {
        const btnMeasure = theme.measures.itemEditor.futureBtns.remove;
        const translateVal = btnMeasure.transform.translate
            .map(remOutput)
            .join(', ');
        return css`
            transform: translate(${translateVal});
            border-radius: ${remOutput(btnMeasure.borderRadius)};
        `;
    }}
`;

export const RemoveRedIcon_ = styled(RemoveRedIcon)`
    ${({ theme }) => {
        const iconTheme = theme.itemEditor.futureBtns.remove.icon;
        const iconMeasure = theme.measures.itemEditor.futureBtns.remove.icon;
        return css`
            cursor: pointer;
            width: ${remOutput(iconMeasure.size)};
            height: ${remOutput(iconMeasure.size)};
            border-radius: ${remOutput(iconMeasure.borderRadius)};

            path {
                fill: ${iconTheme.fill};
            }
        `;
    }}
`;
