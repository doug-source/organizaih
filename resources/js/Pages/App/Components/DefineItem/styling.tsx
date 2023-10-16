import { remOutput } from '@/libraries';
import { fonts } from '@/settings';
import { css, styled } from 'styled-components';

type DefineItemProps = {
    $similar?: boolean;
};

const firstChildStyle = css`
    ${({ theme }) => {
        const defineItemMeasure = theme.measures.defineItem;
        return css`
            display: flex;
            flex-direction: column;
            justify-content: center;
            min-height: ${remOutput(defineItemMeasure.first.minHeight)};
            padding-left: ${remOutput(defineItemMeasure.first.padding.left)};
        `;
    }}
`;

const childSimilarStyle = css`
    ${({ theme }) => {
        const defineItemMeasure = theme.measures.defineItem;
        return css`
            padding-left: ${remOutput(defineItemMeasure.remain.padding.left)}
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
        `;
    }}
`;

export const DefineItem_ = styled.div<DefineItemProps>`
    ${({ theme, $similar }) => {
        const defineItemMeasure = theme.measures.defineItem;
        return css`
            position: relative;
            border-radius: ${remOutput(defineItemMeasure.border.radius)};

            &:first-child {
                ${!$similar ? firstChildStyle : childSimilarStyle}
            }

            &:not(:first-child) {
                ${childSimilarStyle}
            }
        `;
    }}
`;

export const DefineItemWrap_ = styled.div`
    line-height: normal;
`;

export const DefineItemLabel_ = styled.div`
    ${({ theme }) => {
        const defineItemMeasure = theme.measures.defineItem;
        return css`
            line-height: normal;
            font-family: ${fonts.family[2]};
            font-size: ${remOutput(defineItemMeasure.label.fontSize)};
        `;
    }}
`;

export const DefineItemValue_ = styled.div`
    ${({ theme }) => {
        const defineItemMeasure = theme.measures.defineItem;
        return css`
            line-height: normal;
            font-family: ${fonts.family[2]};
            font-size: ${remOutput(defineItemMeasure.value.fontSize)};
        `;
    }}
`;
