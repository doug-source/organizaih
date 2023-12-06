import { remOutput } from '@/libraries';
import { fonts } from '@/settings';
import { css, styled } from 'styled-components';
import { NavBar_, Top_ } from '../..';

type HeadingProps = {
    $hasPhoto: boolean;
};

export const Heading2_ = styled.h2<HeadingProps>`
    ${({ theme, $hasPhoto }) => {
        const topItemTheme = theme.measures.header.topItem;
        const definePhotoMeasure = theme.measures.definePhoto;
        const {
            leftItems: { heading2 },
            rightItems: {
                spacing: { marginLeft: mLeftRightItemSpacing },
                wideLogout: {
                    svg: { size: wideLogoutSvgSize },
                },
            },
            padding: { left: paddLeftTopItem },
        } = topItemTheme;

        const photoSize = $hasPhoto ? definePhotoMeasure.size / 2 : 0;

        const widthToRemove =
            1 * mLeftRightItemSpacing + // only one item
            // no wide-logout
            paddLeftTopItem +
            photoSize;

        const widthToRemoveWide =
            2 * mLeftRightItemSpacing + // two items
            wideLogoutSvgSize +
            paddLeftTopItem +
            photoSize;

        const { wideScreen, mediumScreen } = theme.measures;

        return css`
            ${Top_}.nowhere & {
                justify-content: center;
                flex: 1;
            }
            ${Top_}.closed > &,
            ${NavBar_}.dashboard ${Top_}.closed & {
                display: none;
            }
            ${Top_} & {
                display: flex;
                justify-content: flex-start;
                align-items: center;
                margin-top: 0;
                margin-bottom: 0;
                text-align: left;
                font-family: ${fonts.family[2]};
                font-weight: bold;
                z-index: -1;
                width: calc(100% - ${remOutput(widthToRemove)});
                font-size: ${remOutput(heading2.fontSize)};
                @media ${wideScreen} {
                    width: calc(100% - ${remOutput(widthToRemoveWide)});
                    font-size: ${remOutput(heading2.wide.fontSize)};
                }
                @media ${mediumScreen} {
                    font-size: ${remOutput(heading2.medium.fontSize)};
                }
                ${NavBar_}.dashboard & {
                    display: flex;
                }
            }
        `;
    }}
`;

export const TitleSpan_ = styled.span`
    ${({ theme }) => {
        const topItemTheme = theme.measures.header.topItem;
        const {
            leftItems: {
                titleSpan: { marginLeft: mLeftTitleSpan },
            },
        } = topItemTheme;
        const { wideScreen, mediumScreen } = theme.measures;
        return css`
            align-self: flex-start;
            @media ${mediumScreen} {
                align-self: center;
            }
            @media ${wideScreen} {
                align-self: center;
            }
            margin-left: ${remOutput(mLeftTitleSpan)};
        `;
    }}
`;
