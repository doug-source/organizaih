import { remOutput } from '@/libraries';
import { fonts } from '@/settings';
import { css, styled } from 'styled-components';

export const CheckboxWrapper_ = styled.div`
    display: flex;
`;

export const SwitchInput_ = styled.input.attrs({ type: 'checkbox' })`
    display: none;
`;

const styleX = css`
    display: flex;
    position: relative;
    align-items: center;
`;

export const UncheckedX_ = styled.span`
    opacity: 1;
    order: 1;
    transition: opacity 0.5s ease-out;
    ${styleX}
`;

export const CheckedX_ = styled.span`
    opacity: 0;
    order: 2;
    transition: none;
    width: 0;
    ${styleX}
`;

export const SwitchLabel_ = styled.label`
    ${({ theme }) => {
        const labelTheme = theme.gateSwitcher.label;
        const gateSwitcherMeasure = theme.measures.gateSwitcher;
        const labelMeasures = gateSwitcherMeasure.label;
        const switchMeasures = gateSwitcherMeasure.switch;
        return css`
            ${SwitchInput_} + & {
                display: flex;
                align-items: center;
                user-select: none;
                position: relative;
                cursor: pointer;
                gap: 0;
                font-family: ${fonts.family[8]};
                color: ${labelTheme.color};
                font-size: ${remOutput(labelMeasures.fontSize)};
                line-height: ${remOutput(labelMeasures.lineHeight)};

                &::before,
                &::after {
                    content: '';
                    display: block;
                }
                &::before {
                    transition: background-color 0.125s ease-out;
                    background-color: ${labelTheme.before.bg};
                    border-radius: ${remOutput(
                        labelMeasures.before.border.radius,
                    )};
                    margin-right: ${remOutput(
                        labelMeasures.before.margin.right,
                    )};
                    width: ${remOutput(labelMeasures.before.width)};
                    height: ${remOutput(labelMeasures.before.height)};
                }
                &::after {
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    margin-top: auto;
                    margin-bottom: auto;
                    transition: transform 0.125s ease-out;
                    background: ${labelTheme.after.bg};
                    box-shadow: ${labelTheme.after.boxShadow};
                    border-radius: ${remOutput(
                        labelMeasures.after.border.radius,
                    )};
                    width: ${remOutput(labelMeasures.after.width)};
                    height: ${remOutput(labelMeasures.after.height)};
                    left: ${remOutput(labelMeasures.after.left)};
                }
            }
            ${SwitchInput_}:checked:disabled + &,
            ${SwitchInput_}:disabled + & {
                &::before {
                    filter: grayscale(60%);
                    opacity: 0.7;
                }
            }
            ${SwitchInput_}:checked + & {
                &::before {
                    background-color: ${labelTheme.before.bg};
                }
                &::after {
                    transform: translate(
                        ${switchMeasures.checked.label.transform.translate
                            .map((val) => remOutput(val))
                            .join(', ')}
                    );
                }
                & ${UncheckedX_} {
                    opacity: 0;
                    order: 2;
                    width: 0;
                    transition: none;
                }
                & ${CheckedX_} {
                    opacity: 1;
                    order: 1;
                    width: auto;
                    transition: opacity 0.5s ease-out;
                }
            }
        `;
    }}
`;

export const TextX_ = styled.span`
    ${({ theme }) => {
        const switchText = theme.measures.gateSwitcher.label.switchTextX;
        return css`
            ${SwitchLabel_} & {
                display: block;
                font-weight: bold;
                margin-right: ${remOutput(switchText.margin.right)};
            }
        `;
    }}
`;

export const ToggletextX_ = styled.span`
    ${SwitchLabel_} & {
        display: flex;
        position: relative;
    }
`;

export const HiddenLabelX_ = styled.span`
    position: absolute;
    visibility: hidden;
`;
