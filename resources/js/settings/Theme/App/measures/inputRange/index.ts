import { DefaultTheme } from 'styled-components';
import { makeRangeBoxData } from './libraries';

const rangeBoxData = makeRangeBoxData();

export const inputRange: DefaultTheme['measures']['inputRange'] = {
    qtyText: {
        fontSize: 20,
    },
    slider: {
        control: {
            border: rangeBoxData.control.border,
            fontSize: rangeBoxData.control.fontSize,
            height: rangeBoxData.slider.control.height,
            width: rangeBoxData.slider.control.width,
        },
        currentValue: {
            after: rangeBoxData.currentValue.after,
            border: {
                radius: rangeBoxData.currentValue.border.radius,
            },
            height: rangeBoxData.currentValue.height,
            padding: {
                top: rangeBoxData.currentValue.padding.top,
                bottom: rangeBoxData.currentValue.padding.bottom,
                left: rangeBoxData.currentValue.padding.left,
                right: rangeBoxData.currentValue.padding.right,
            },
            size: rangeBoxData.currentValue.size,
            width: rangeBoxData.currentValue.width,
        },
        input: {
            width: rangeBoxData.slider.width,
            height: rangeBoxData.slider.height,
        },
        label: {
            fontSize: 12.8,
        },
        leftBorder: rangeBoxData.leftBorder,
        pack: {
            after: {
                edgeLower: {
                    height: 4,
                },
            },
            before: {
                edgeUpper: {
                    widthRemoved: 2 * rangeBoxData.control.size,
                    height: 1,
                },
            },
            border: {
                radius: rangeBoxData.control.border.radius,
            },
            gap: rangeBoxData.slider.gap,
        },
        rightBorder: rangeBoxData.rightBorder,
        stdBorder: {
            width: 1,
        },
    },
};
