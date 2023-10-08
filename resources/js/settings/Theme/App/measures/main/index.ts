import { DefaultTheme } from 'styled-components';

const navlinkIconDashboard = {
    size: 40,
};
const navbarNavHorizontal = {
    size: 50,
};

export const main: DefaultTheme['measures']['main'] = {
    container: {
        margin: {
            top: 8,
        },
    },
    row: {
        height: '100%',
    },
    containerFluid: {
        width: '100%',
        height: '100%',
        wide: {
            padding: {
                top: 0,
                bottom: 0,
                left: 16,
                right: 16,
            },
        },
    },
    spacer: {
        width: navlinkIconDashboard.size + 2 * navbarNavHorizontal.size,
    },
};
