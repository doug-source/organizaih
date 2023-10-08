import { remOutput } from '@/libraries';
import { css, styled } from 'styled-components';

export type BtnProps = {
    $color?: string;
    $borderColor?: string;
    $borderWidth?: number;
    $borderRadius?: number;
};

export const LabelTextBtn_ = styled.div``;

export const Btn_ = styled.button<BtnProps>`
    ${({
        theme,
        $borderWidth = theme.generic.measures.btn.border.width,
        $borderRadius = theme.generic.measures.btn.border.radius,
        $borderColor = theme.tools.btn.border.color,
        $color = theme.generic.btn.color,
    }) => {
        const btnMeasures = theme.generic.measures.btn;
        const { wideScreen, mediumScreen } = theme.measures;
        return css`
            display: inline-block;
            text-align: center;
            text-decoration: none;
            vertical-align: middle;
            cursor: pointer;
            user-select: none;
            font-weight: bold;
            font-size: ${remOutput(btnMeasures.fontSize)};
            line-height: ${btnMeasures.lineHeight};
            transition: color 0.15s ease-in-out,
                background-color 0.15s ease-in-out,
                border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

            border-radius: ${remOutput($borderRadius)};
            padding-left: ${remOutput(btnMeasures.padding.left)};
            padding-right: ${remOutput(btnMeasures.padding.right)};
            border-width: ${remOutput($borderWidth)};
            border-style: solid;
            border-color: ${$borderColor};
            color: ${$color};
            position: relative;

            @media ${wideScreen} {
                padding-top: ${remOutput(btnMeasures.padding.wide.top)};
                padding-bottom: ${remOutput(btnMeasures.padding.wide.bottom)};
            }
            @media ${mediumScreen} {
                padding-top: ${remOutput(btnMeasures.padding.wide.top)};
                padding-bottom: ${remOutput(btnMeasures.padding.wide.bottom)};
            }
        `;
    }}
`;

export const Link_ = styled.a`
    text-decoration: none;
    &:before {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }
`;
