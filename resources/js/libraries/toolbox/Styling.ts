import { DefaultTheme } from 'styled-components';

export const remOutput = (px: number) => {
    return `${(px / 16).toFixed(3)}rem`;
};

export const toRem = (property: string, val: number) => {
    return `${property}: ${remOutput(val)};`;
};

export const hexToRgb = (h: string) => {
    let r = 0;
    let g = 0;
    let b = 0;

    if (h.length === 4) {
        // 3 digits
        r = Number.parseInt('0x' + h[1] + h[1], 16);
        g = Number.parseInt('0x' + h[2] + h[2], 16);
        b = Number.parseInt('0x' + h[3] + h[3], 16);
    } else if (h.length === 7) {
        // 6 digits
        r = Number.parseInt('0x' + h[1] + h[2], 16);
        g = Number.parseInt('0x' + h[3] + h[4], 16);
        b = Number.parseInt('0x' + h[5] + h[6], 16);
    }
    return [r, g, b] as const;
};

export const rgbToHex = (rgb: string) => {
    const reg = /^rgb\((\d{1,3}),\s?(\d{1,3}),\s?(\d{1,3})\)$/gi;
    const match = reg.exec(rgb);
    if (match === null) {
        return match;
    }
    let [, r, g, b] = match;
    r = Number(r).toString(16).padStart(2, '0');
    g = Number(g).toString(16).padStart(2, '0');
    b = Number(b).toString(16).padStart(2, '0');
    return `#${r}${g}${b}`;
};

export const extractThemeNumber = (
    theme: DefaultTheme,
    value: number | Record<typeof theme.key, number>,
) => {
    if (typeof value === 'number') {
        return value;
    }
    return value[theme.key];
};

const getCssStyle = (element: Element, prop: string) => {
    return window.getComputedStyle(element, null).getPropertyValue(prop);
};

const getCanvasFont = (el = document.body) => {
    const fontWeight = getCssStyle(el, 'font-weight') ?? 'normal';
    const fontSize = getCssStyle(el, 'font-size') ?? '16px';
    const fontFamily = getCssStyle(el, 'font-family') ?? 'Times New Roman';

    return `${fontWeight} ${fontSize} ${fontFamily}`;
};

const canvas = document.createElement('canvas');

const getTextWidth = (text: string, font: string) => {
    const context = canvas.getContext('2d');
    if (!context) {
        return 0;
    }
    context.font = font;
    const metrics = context.measureText(text);
    return metrics.width;
};

export const getElementTextWidth = (text: string, el: HTMLElement) => {
    return getTextWidth(text, getCanvasFont(el));
};
