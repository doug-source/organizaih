import { PulldownIcon, commafyList, remifyList } from '@/Pages/App/libraries';
import { remOutput } from '@/libraries';
import { css, styled } from 'styled-components';

export const TopWrapBtn_ = styled.button`
    ${({ theme }) => {
        const { wideScreen } = theme.measures;
        const pulldownMeasure = theme.measures.header.topItem.pulldown;
        const translateValue = commafyList(
            remifyList(pulldownMeasure.btn.transform.translate),
        );
        return css`
            position: absolute;
            margin: auto;
            left: 0;
            right: 0;
            display: flex;
            align-items: flex-end;
            outline: none;
            transform: translate(${translateValue});
            height: ${pulldownMeasure.btn.height};
            width: ${remOutput(pulldownMeasure.btn.width)};
            background: transparent;
            border-width: 0;
            cursor: pointer;
            @media ${wideScreen} {
                display: none;
            }
        `;
    }}
`;

export const Icon_ = styled(PulldownIcon)`
    ${({ theme }) => {
        const pulldownTheme = theme.header.topItem.pulldown;
        return css`
            .mark {
                fill: ${pulldownTheme.mark.fill};
            }
            ${TopWrapBtn_}.closer & {
                transition-property: transform;
                transition-duration: 0.5s;
                transform: rotateX(3.14rad);
            }
        `;
    }}
`;
