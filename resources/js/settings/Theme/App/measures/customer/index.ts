import { DefaultTheme } from 'styled-components';

export const customer: DefaultTheme['measures']['customer'] = {
    container: {
        wide: {
            gap: 16,
        },
    },
    filtersBar: {
        gap: 12,
    },
    form: {
        base: {
            formField: {
                photo: {
                    label: {
                        margin: {
                            left: 80,
                        },
                    },
                    error: {
                        margin: {
                            left: 64,
                        },
                    },
                },
            },
        },
    },
};
