import { RemoveRedSVG } from '@/Pages/App/libraries/icons/asynchronous';
import { remOutput } from '@/libraries';
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

export const RemoveRedSVG_ = styled(RemoveRedSVG)`
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
