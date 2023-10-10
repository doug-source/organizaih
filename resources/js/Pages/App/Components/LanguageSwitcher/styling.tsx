import { remOutput } from '@/libraries';
import { css, styled } from 'styled-components';

export const NavbarLang_ = styled.div`
    ${({ theme }) => {
        const switcherMeasure = theme.measures.config.langSwitcher;
        const wideScreen = theme.measures.wideScreen;
        return css`
            display: flex;
            padding: ${remOutput(switcherMeasure.padding)};
            justify-content: space-around;
            @media ${wideScreen} {
                justify-content: center;
                > * ~ * {
                    margin-left: ${remOutput(
                        switcherMeasure.flag.wide.margin.left,
                    )};
                }
            }
        `;
    }}
`;

export const Flag_ = styled.img`
    ${({ theme }) => {
        const flagMeasure = theme.measures.config.langSwitcher.flag;
        return css`
            width: ${remOutput(flagMeasure.width)};
            display: block;
        `;
    }}
`;

export const FlagNoLink_ = styled(Flag_)`
    filter: grayscale(70%);
`;

export const FlagWrapper_ = styled.span`
    ${({ theme }) => {
        const flagMeasure = theme.measures.config.langSwitcher.flag;
        return css`
            display: flex;
            align-items: center;
            gap: ${remOutput(flagMeasure.wrapper.gap)};
        `;
    }}
`;

export const LabelNoLink_ = styled.span`
    cursor: default;
`;
