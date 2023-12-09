import { Top_ } from '@/Pages/App/Components/HeaderTop/styling';
import {
    ExitLink_,
    LogoutIcon_,
} from '@/Pages/App/Components/LogoutLink/styling';
import { LogoutLinkAsync } from '@/Pages/App/libraries/toolbox/Asynchronous';
import { remOutput } from '@/libraries/toolbox/Styling';
import { fonts } from '@/settings';
import { css, styled } from 'styled-components';

export const RightItemsContainer_ = styled.div`
    ${({ theme }) => {
        const rightItemsMeasure = theme.measures.header.topItem.rightItems;
        return css`
            display: flex;
            overflow: hidden;
            height: ${remOutput(rightItemsMeasure.height)};
            position: relative;
            z-index: 0;

            ${Top_}.closed > & {
                display: none;
            }
        `;
    }}
`;

export const LogoutLinkSt_ = styled(LogoutLinkAsync)`
    ${({ theme }) => {
        const rightItemsMeasure = theme.measures.header.topItem.rightItems;
        const wideLogoutMeasure = rightItemsMeasure.wideLogout;
        const { wideScreen } = theme.measures;
        return css`
            display: none;
            margin-left: ${remOutput(rightItemsMeasure.spacing.marginLeft)};
            @media ${wideScreen} {
                display: flex;
                ${ExitLink_} {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    text-decoration: none;
                    font-family: ${fonts.family[3]};

                    ${LogoutIcon_} {
                        width: ${remOutput(wideLogoutMeasure.svg.size)};
                        height: ${remOutput(wideLogoutMeasure.svg.size)};
                        position: relative;
                        z-index: 1;
                        top: 0;
                    }
                }
            }
        `;
    }}
`;
