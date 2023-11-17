import { DefaultTheme } from 'styled-components';

export const photoFile: DefaultTheme['measures']['photoFile'] = {
    container: {
        marginLeft: 80,
        padding: 8,
        width: 176,
        height: 48,
        border: {
            width: 0.0625,
        },
        borderRadius: 8,
        heading: {
            fontSize: 13.6,
            maxWidth: 128,
            lineHeight: 2.2,
        },
    },
    icon: {
        flexBasis: 32,
        height: '100%',
    },
    input: {
        height: '100%',
        width: {
            diff: 16,
        },
    },
};
