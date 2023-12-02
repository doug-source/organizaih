import {
    GateSwitcher,
    SwitchInput_,
    SwitchLabel_,
} from '@/Pages/App/Components/GateSwitcher';
import {
    DayModeIcon,
    NightModeIcon,
} from '@/Pages/App/libraries/icons/asynchronous';
import { remOutput } from '@/libraries';
import { fonts } from '@/settings';
import { css, styled } from 'styled-components';

export const Fieldset_ = styled.fieldset`
    ${({ theme }) => {
        const fieldsetTheme = theme.config.fieldset;
        const fieldsetMeasure = theme.measures.config.fieldset;
        return css`
            color: ${fieldsetTheme.color};
            border-width: ${remOutput(fieldsetMeasure.border.width)};
            border-style: solid;
            border-color: ${fieldsetTheme.border.color};
            flex: 1;
            padding: ${remOutput(fieldsetMeasure.padding)};
            border-radius: ${remOutput(fieldsetMeasure.borderRadius)};
            & ~ & {
                margin-top: ${remOutput(fieldsetMeasure.siblings.margin.top)};
            }
        `;
    }}
`;

const iconStyle = css`
    ${({ theme }) => {
        const iconMeasure = theme.measures.config.icon;
        return css`
            width: ${remOutput(iconMeasure.size)};
            height: ${remOutput(iconMeasure.size)};
        `;
    }}
`;

export const DayModeIcon_ = styled(DayModeIcon)`
    ${iconStyle}
`;

export const NightModeIcon_ = styled(NightModeIcon)`
    ${iconStyle}
`;

export const ThemeIconWrapper_ = styled.div`
    ${({ theme }) => {
        const wrapperMeasure = theme.measures.config.icon.wrapper;
        return css`
            display: flex;
            align-items: center;
            gap: ${remOutput(wrapperMeasure.gap)};
        `;
    }}
`;

export const GateSwitcher_ = styled(GateSwitcher)`
    ${({ theme }) => {
        const labelMeasure = theme.measures.gateSwitcher.label;
        const gateSwitcherMeasure = theme.measures.config.gateSwitcher;
        return css`
            justify-content: space-around;
            padding-bottom: ${remOutput(gateSwitcherMeasure.padding.bottom)};
            ${SwitchInput_} + ${SwitchLabel_} {
                color: inherit;
                font-family: ${fonts.family[1]};
                font-size: ${remOutput(labelMeasure.fontSize)};
                &::after {
                    opacity: 0;
                }
                &::before {
                    opacity: 0;
                    position: relative;
                    z-index: 1;
                    margin-right: -${remOutput(labelMeasure.before.width)};
                }
            }
        `;
    }}
`;
