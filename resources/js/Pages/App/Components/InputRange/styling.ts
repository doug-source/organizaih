import { RoundBtn_ } from '@/Components/RoundButton';
import { InputNumber } from '@/Pages/App/Components/InputNumber';
import { remOutput } from '@/libraries/toolbox/Styling';
import { fonts } from '@/settings';
import { css, styled } from 'styled-components';

export const RangeCurrentValue_ = styled.div`
    ${({ theme }) => {
        const {
            inputRange: {
                slider: { currentValue: currValueMeasure },
            },
        } = theme.measures;

        const currValueTheme = theme.inputRange.slider.currentValue;
        const currValueAfterTheme = currValueTheme.after;
        const { mediumScreen, wideScreen } = theme.measures;
        return css`
            position: relative;
            white-space: nowrap;
            font-weight: bold;
            display: flex;
            align-items: center;
            justify-content: center;
            align-self: flex-end;
            padding-top: ${remOutput(currValueMeasure.padding.top)};
            padding-bottom: ${remOutput(currValueMeasure.padding.bottom)};
            padding-left: ${remOutput(currValueMeasure.padding.left)};
            padding-right: ${remOutput(currValueMeasure.padding.right)};
            border-radius: ${remOutput(currValueMeasure.border.radius)};
            width: ${remOutput(currValueMeasure.width)};
            height: ${remOutput(currValueMeasure.height)};
            background-color: ${currValueTheme.bg};
            color: ${currValueTheme.color};
            @media ${mediumScreen} {
                width: ${remOutput(currValueMeasure.size)};
            }
            @media ${wideScreen} {
                width: ${remOutput(currValueMeasure.size)};
            }

            &::after {
                content: '';
                width: 0;
                height: 0;
                position: absolute;
                border-bottom-width: ${remOutput(
                    currValueMeasure.after.border.width,
                )};
                border-bottom-style: solid;
                border-bottom-color: ${currValueAfterTheme.border.bottom.color};
                border-top-width: ${remOutput(
                    currValueMeasure.after.border.width,
                )};
                border-top-style: solid;
                border-top-color: ${currValueAfterTheme.border.top.color};
                border-right-width: ${remOutput(
                    currValueMeasure.after.border.width,
                )};
                border-right-style: solid;
                border-right-color: ${currValueAfterTheme.border.right.color};
                right: 100%;
            }
        `;
    }}
`;

const RangeBoxBorder_ = styled.div`
    ${({ theme }) => {
        const borderTheme = theme.inputRange.slider.stdBorder;
        const {
            inputRange: {
                slider: { stdBorder: borderMeasure },
            },
        } = theme.measures;
        return css`
            position: absolute;
            top: 0;
            bottom: 0;
            margin-top: auto;
            margin-bottom: auto;
            background-color: ${borderTheme.bg};
            width: ${remOutput(borderMeasure.width)};
        `;
    }}
`;

export const RangeBoxRightBorder_ = styled(RangeBoxBorder_)`
    ${({ theme }) => {
        const {
            inputRange: {
                slider: { rightBorder: rightBorderMeasure },
            },
        } = theme.measures;
        return css`
            right: ${remOutput(rightBorderMeasure.right)};
        `;
    }}
`;

export const RangeBoxLeftBorder_ = styled(RangeBoxBorder_)`
    ${({ theme }) => {
        const {
            inputRange: {
                slider: {
                    leftBorder: leftBorderMeasure,
                    control: controlMeasure,
                },
            },
        } = theme.measures;
        const {
            leftBorder: { before: leftBorderBeforeTheme },
        } = theme.inputRange.slider;
        return css`
            height: ${remOutput(leftBorderMeasure.height)};
            left: ${remOutput(leftBorderMeasure.left)};

            &::before {
                position: absolute;
                content: '';
                right: 100%;
                background-color: ${leftBorderBeforeTheme.bg};
                height: ${remOutput(controlMeasure.height)};
                width: ${remOutput(controlMeasure.width)};
                border-top-left-radius: ${remOutput(
                    controlMeasure.border.radius,
                )};
                border-bottom-left-radius: ${remOutput(
                    controlMeasure.border.radius,
                )};
            }
        `;
    }}
`;

const Control_ = styled(RoundBtn_)`
    ${({ theme }) => {
        const {
            inputRange: {
                slider: { control: controlMeasure },
            },
        } = theme.measures;
        const controlTheme = theme.inputRange.slider.control;
        return css`
            cursor: pointer;
            user-select: none;
            display: flex;
            align-items: center;
            justify-content: center;
            text-transform: uppercase;
            font-weight: bold;
            position: relative;
            z-index: 1;
            background: ${controlTheme.bg};
            box-shadow: ${controlTheme.boxShadow};

            width: ${remOutput(controlMeasure.width)};
            height: ${remOutput(controlMeasure.height)};
            font-size: ${remOutput(controlMeasure.fontSize)};
            &:hover {
                background: ${controlTheme.hover.bg};
            }
            &:active {
                background: ${controlTheme.active.bg};
                box-shadow: ${controlTheme.active.boxShadow};
            }
        `;
    }}
`;

export const MinusControl_ = styled(Control_)`
    ${({ theme }) => {
        const {
            inputRange: { slider: sliderMeasure },
        } = theme.measures;
        return css`
            border-top-left-radius: ${remOutput(
                sliderMeasure.control.border.radius,
            )};
            border-bottom-left-radius: ${remOutput(
                sliderMeasure.control.border.radius,
            )};
        `;
    }}
`;

export const PlusControl_ = styled(Control_)`
    ${({ theme }) => {
        const {
            inputRange: { slider: sliderMeasure },
        } = theme.measures;
        return css`
            border-top-right-radius: ${remOutput(
                sliderMeasure.control.border.radius,
            )};
            border-bottom-right-radius: ${remOutput(
                sliderMeasure.control.border.radius,
            )};
        `;
    }}
`;

export const ControlIcon_ = styled.i`
    ${({ theme }) => {
        const iconTheme = theme.inputRange.slider.control.icon;
        return css`
            &:before {
                font-style: normal;
                display: block;
                color: inherit;
                content: attr(data-signal);
                text-shadow: ${iconTheme.before.textShadow};
                ${Control_}:active & {
                    color: ${iconTheme.before.actived.color};
                    text-shadow: ${iconTheme.before.actived.textShadow};
                }
            }
        `;
    }}
`;

export const InputNumber_ = styled(InputNumber).attrs({ type: 'range' })`
    ${({ theme }) => {
        const {
            inputRange: {
                slider: { input: inputMeasure },
            },
        } = theme.measures;
        return css`
            width: ${remOutput(inputMeasure.width)};
        `;
    }}
`;

export const RangeBoxPack_ = styled.div`
    ${({ theme }) => {
        const packTheme = theme.inputRange.slider.pack;
        const {
            inputRange: {
                slider: { pack: packMeasure },
            },
        } = theme.measures;
        return css`
            display: flex;
            position: relative;
            padding: 0;
            overflow: hidden;
            background-color: ${packTheme.bg};
            gap: ${remOutput(packMeasure.gap)};
            border-radius: ${remOutput(packMeasure.border.radius)};

            &::after {
                display: block;
                position: absolute;
                bottom: 0;
                left: 0;
                content: '';
                width: 100%;
                background-color: ${packTheme.after.edgeLower.bg};
                height: ${remOutput(packMeasure.after.edgeLower.height)};
            }

            &::before {
                display: block;
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                margin-left: auto;
                margin-right: auto;
                content: '';
                width: calc(
                    ${`100% - ${remOutput(
                        packMeasure.before.edgeUpper.widthRemoved,
                    )}`}
                );
                background-color: ${packTheme.before.edgeUpper.bg};
                height: ${remOutput(packMeasure.before.edgeUpper.height)};
            }
        `;
    }}
`;

export const RangeBoxLabel_ = styled.div`
    ${({ theme }) => {
        const labelTheme = theme.inputRange.slider.label;
        const {
            inputRange: {
                slider: { label: labelMeasure },
            },
        } = theme.measures;
        return css`
            font-family: ${fonts.family[7]};
            color: ${labelTheme.color};
            font-size: ${remOutput(labelMeasure.fontSize)};
        `;
    }}
`;

export const RangeBoxContainer_ = styled.div`
    position: relative;
`;
