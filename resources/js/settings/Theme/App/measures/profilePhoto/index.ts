import { DefaultTheme } from 'styled-components';

export const profilePhoto: DefaultTheme['measures']['profilePhoto'] = {
    padding: {
        top: 8,
        bottom: 8,
    },
    backBtn: {
        margin: {
            left: 144,
            top: -40,
        },
        svg: {
            size: 30,
        },
    },
    photoField: {
        marginLeft: 80,
        fontSize: 16,
    },
    photoPreview: {
        marginRight: 16,
        svg: {
            width: 64,
            height: 67.65,
        },
    },
};
