import { remOutput } from '@/libraries';
import { css, styled } from 'styled-components';

export type RoundBtnProps = {
    $color?: string;
    $borderColor?: string;
    $borderWidth?: number;
    $borderRadius?: number;
};

export const RoundBtnStyle = css<RoundBtnProps>`
    ${({
        theme,
        $borderWidth = theme.measures.tools.btn.border.width,
        $borderRadius = theme.measures.tools.btn.border.radius,
        $borderColor = theme.tools.btn.border.color,
        $color = theme.tools.btn.color,
    }) => {
        const btnMeasures = theme.measures.tools.btn;
        const { wideScreen } = theme.measures;
        return css`
            display: inline-block;
            text-align: center;
            text-decoration: none;
            vertical-align: middle;
            cursor: pointer;
            user-select: none;
            font-weight: 400;
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
            @media ${wideScreen} {
                padding-top: ${remOutput(btnMeasures.padding.wide.top)};
                padding-bottom: ${remOutput(btnMeasures.padding.wide.bottom)};
            }
        `;
    }}
`;

export const LabelTextRoundBtn_ = styled.div``;

export const RoundBtn_ = styled.button<RoundBtnProps>`
    ${RoundBtnStyle}
`;
