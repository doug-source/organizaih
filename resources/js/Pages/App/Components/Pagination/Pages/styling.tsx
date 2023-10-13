import { remOutput } from '@/libraries';
import { css, styled } from 'styled-components';

const pagBarItemStyle = css`
    ${({ theme }) => {
        const { mediumScreen, wideScreen } = theme.measures;
        return css`
            flex: 1;
            @media ${mediumScreen} {
                flex: none;
            }
            @media ${wideScreen} {
                flex: none;
            }
            &:first-child {
                text-align: center;
            }
        `;
    }}
`;

export const PagBar_ = styled.div`
    ${({ theme }) => {
        const { wideScreen } = theme.measures;
        return css`
            display: flex;
            justify-content: center;
            align-items: center;

            @media ${wideScreen} {
                justify-content: stretch;
            }
        `;
    }}
`;

export const PagDesc_ = styled.div`
    ${pagBarItemStyle}
`;

export const PagBtns_ = styled.div`
    display: flex;
    justify-content: center;
`;

const PagBtn = styled.button`
    ${({ theme }) => {
        const btnTheme = theme.measures.pagination.pages.btn;
        const { wideScreen } = theme.measures;
        return css`
            padding-top: ${remOutput(btnTheme.padding.mobile)};
            padding-bottom: ${remOutput(btnTheme.padding.mobile)};
            padding-left: ${remOutput(btnTheme.padding.left)};
            padding-right: ${remOutput(btnTheme.padding.right)};
            outline: none;

            @media ${wideScreen} {
                padding-top: ${remOutput(btnTheme.padding.default)};
                padding-bottom: ${remOutput(btnTheme.padding.default)};

                &:nth-of-type(1) {
                    padding-right: ${btnTheme.padding.default};
                }
                &:nth-of-type(2) {
                    padding-left: ${btnTheme.padding.default};
                }
            }
        `;
    }}
`;

const pagBtnStyle = css`
    ${({ theme }) => {
        const btnTheme = theme.pagination.page.btn;
        const btnMeasure = theme.measures.pagination.pages.btn;
        return css`
            border-radius: ${remOutput(btnMeasure.icon.size)};
            svg {
                width: ${remOutput(btnMeasure.icon.size)};
                cursor: pointer;
                border-radius: ${remOutput(btnMeasure.border.radius)};
                path {
                    fill: ${btnTheme.svg.path.fill};
                    stroke: none;
                }
            }
        `;
    }}
`;

export const PagPrevBtn_ = styled(PagBtn)`
    ${({ theme }) => {
        const btnMeasure = theme.measures.pagination.pages.btn;
        return css`
            ${pagBtnStyle}
            svg {
                transform: rotate(${btnMeasure.icon.rotation});
            }
        `;
    }}
`;

export const PagNextBtn_ = styled(PagBtn)`
    ${({ theme }) => {
        const btnMeasure = theme.measures.pagination.pages.btn;
        return css`
            ${pagBtnStyle}
            svg {
                transform: rotate(-${btnMeasure.icon.rotation});
            }
        `;
    }}
`;
