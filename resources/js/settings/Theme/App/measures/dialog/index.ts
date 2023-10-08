import { DefaultTheme } from 'styled-components';

const dialogPadding = {
    top: 0,
    bottom: 0,
    left: 32,
    right: 32,
};

export const dialog: DefaultTheme['measures']['dialog'] = {
    close: {
        width: 24,
        top: 8,
        right: 8,
    },
    footer: {
        padding: dialogPadding,
    },
    header: {
        padding: dialogPadding,
        title: {
            fontSize: 17.6,
        },
    },
    main: {
        paragraph: {
            margin: '6% auto 0 auto',
            fontSize: 20,
        },
    },
    section: {
        minWidth: 330,
        width: '30%',
        minHeight: 264,
        height: '45%',
        borderRadius: 8,
    },
};
