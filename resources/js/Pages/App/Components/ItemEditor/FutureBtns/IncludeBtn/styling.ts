import { ArrowIcon } from '@/Pages/App/Components/ArrowIcon';
import { commafyList, remifyList } from '@/Pages/App/libraries';
import { remOutput } from '@/libraries';
import { css, styled } from 'styled-components';

export const IncludeFutureBtn_ = styled.button`
    ${({ theme }) => {
        const incBtnMeasure = theme.measures.itemEditor.futureBtns.include;
        const translatePos = commafyList(
            remifyList(incBtnMeasure.transform.translate),
        );
        return css`
            transform: translate(${translatePos});
            border-radius: ${remOutput(incBtnMeasure.borderRadius)};
        `;
    }}
`;

export const ArrowIcon_ = styled(ArrowIcon)`
    ${({ theme }) => {
        const iconTheme = theme.itemEditor.futureBtns.include.icon;
        const iconMeasure = theme.measures.itemEditor.futureBtns.include.icon;
        return css`
            cursor: pointer;
            width: ${remOutput(iconMeasure.size)};
            height: ${remOutput(iconMeasure.size)};
            border-radius: ${remOutput(iconMeasure.borderRadius)};

            path {
                fill: ${iconTheme.fill};
                stroke: ${iconTheme.stroke};
            }
        `;
    }}
`;
