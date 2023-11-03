import { remOutput } from '@/libraries';
import { css, styled } from 'styled-components';

export const Container_ = styled.div`
    font-size: 0;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: stretch;
`;

export const InputRadio_ = styled.input.attrs({ type: 'radio' })`
    width: 0;
    height: 0;
    position: absolute;
    opacity: 0;
`;

type LabelProps_ = {
    $backgroundColor?: string;
    $borderColor?: string;
    $color?: string;
    $shadowColor?: string;
    $colorNot?: string;
};

export const Label_ = styled.label<LabelProps_>`
    ${({
        theme,
        $backgroundColor,
        $borderColor,
        $color,
        $shadowColor,
        $colorNot,
    }) => {
        const labelTheme = theme.radioToggle.label;
        const labelMeasure = theme.measures.radioToggle.label;
        return css`
            display: flex;
            flex: 1;
            margin: 0;
            position: relative;
            text-align: center;
            justify-content: center;
            align-items: center;
            cursor: pointer;

            border-width: ${remOutput(labelMeasure.border.width)};
            border-style: solid;
            border-color: ${labelTheme.border.color};

            padding-top: ${remOutput(labelMeasure.padding.top)};
            padding-bottom: ${remOutput(labelMeasure.padding.bottom)};
            padding-left: ${remOutput(labelMeasure.padding.left)};
            padding-right: ${remOutput(labelMeasure.padding.right)};

            border-right-style: solid;
            border-right-width: ${remOutput(labelMeasure.border.width)};
            background-color: ${labelTheme.bg};

            font-size: ${remOutput(labelMeasure.fontSize)};
            font-weight: 600;
            line-height: ${labelMeasure.lineHeight};
            box-shadow: ${labelTheme.boxShadow};
            transition: border-color 0.15s ease-out, color 0.25s ease-out,
                background-color 0.15s ease-out, box-shadow 0.15s ease-out;

            &:first-of-type {
                border-right: none;
                border-top-left-radius: ${remOutput(
                    labelMeasure.edgeLeftBorderRadius[0],
                )};
                border-top-right-radius: ${remOutput(
                    labelMeasure.edgeLeftBorderRadius[1],
                )};
                border-bottom-right-radius: ${remOutput(
                    labelMeasure.edgeLeftBorderRadius[2],
                )};
                border-bottom-left-radius: ${remOutput(
                    labelMeasure.edgeLeftBorderRadius[3],
                )};
            }
            &:last-of-type {
                border-left: none;
                border-top-left-radius: ${remOutput(
                    labelMeasure.edgeRightBorderRadius[0],
                )};
                border-top-right-radius: ${remOutput(
                    labelMeasure.edgeRightBorderRadius[1],
                )};
                border-bottom-right-radius: ${remOutput(
                    labelMeasure.edgeRightBorderRadius[2],
                )};
                border-bottom-left-radius: ${remOutput(
                    labelMeasure.edgeRightBorderRadius[3],
                )};
            }
            ${InputRadio_}:checked + & {
                ${$backgroundColor &&
                css`
                    background-color: ${$backgroundColor};
                `}
                ${$borderColor &&
                css`
                    border-color: ${$borderColor};
                `}
                ${$color &&
                css`
                    color: ${$color};
                `}
                ${$shadowColor &&
                css`
                    box-shadow: 0 0 ${remOutput(10)} ${$shadowColor};
                `}
            }
            ${InputRadio_} + & {
                ${$colorNot &&
                css`
                    color: ${$colorNot};
                `}
            }
        `;
    }}
`;
