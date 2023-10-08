import { hexToRgb } from '@/libraries';

export const blue = {
    1: 'blue',
    2: '#66b3fb',
    3: '#4f46e5',
    4: '#0d6efd',
    5: '#4e8bcc',
    6: '#b9d9eb',
    7: '#3dedcf',
    9: '#3c4fe0',
    10: '#5adaff',
    11: '#5468ff',
    12: '#80b4fb',
    13: '#4073c8',
    14: '#06c',
    15: '#0066cc',
    16: '#252247',
    17: '#0073a1',
    18: '#00adf2',
    19: '#2fb5d1',
    20: '#1e90ff',
    darken: '#4949c8',
    lighten: {
        0: '#c0e0e6',
        1: '#1077b3',
        2: '#4b9dea',
        3: '#f4f4f4',
        4: '#86b7fe',
        5: '#32d7c6',
    },
};

export const white = {
    1: '#fff',
    2: '#e7f3f5',
    3: '#ced4da',
    4: '#e4e6eb',
    5: '#8e63b0',
    6: '#f3f4f6',
};

export const gray = {
    2: '#c3c8c1',
    3: '#e9e6df',
    4: '#adadad',
    5: '#ddd',
    6: '#7e7d7d',
    7: '#868688',
    8: '#4e4e4e',
    9: '#6b7280',
    12: '#b3b3b3',
    13: '#b1b1b1',
    14: '#cccccc',
    15: '#6f6e6e',
    16: '#545454',
    17: '#d3d3d3',
    18: '#6a6971',
    19: '#4b4d4d',
    20: '#b0b3b8',
    21: '#1a1b1c',
    22: '#272829',
    23: '#181818',
    24: '#3a3b3c',
    25: '#c8c8c8',
    26: '#343434',
    27: '#272727',
    28: '#393939',
    29: '#676767',
    30: '#979797',
    31: '#262626',
    32: '#737373',
    33: '#b5b5b5',
    34: '#bbb',
    35: '#848484',
    36: '#d1d5db',
};

export const purple = {
    darken: {
        1: 'rgba(45, 35, 66, 0.4)',
        2: 'rgba(45, 35, 66, 0.3)',
        3: 'rgba(58, 65, 111, 0.5)',
    },
    lighten: {
        1: '#814493',
        2: '#7049a5',
        3: '#5f6196',
    },
    0: 'purple',
    1: '#2d002d',
    3: '#ff00d5',
    4: '#e0b5ff',
    5: '#3d0641',
    6: '#3c0835',
};

export const green = {
    lighten: {
        1: '#5fc8be',
        2: '#21d468',
        3: '#4eb04e',
    },
    0: '#008000',
    1: '#2f716a',
    2: '#1bbc14',
    3: '#b7e445',
    4: '#b7e445',
};

export const pink = {
    darken: '#fd91b6',
    2: '#fb66b3',
    3: '#ea4bac',
};

export const orange = {
    2: '#ffd164',
    3: '#e28424',
};

export const red = {
    2: '#dc3545',
    3: '#842029',
    4: '#f6cbcf',
    5: '#f8d7da',
    6: '#ff8087',
    7: '#f63838',
    8: '#dc2626',
};

export const yellow = {
    1: 'yellow',
    2: '#f1d333',
};

export const black = {
    1: '#000',
    2: '#333',
    3: '#212529',
    4: '#242526',
    5: '#191919',
    6: '#1c1e21',
    7: '#38393a',
    8: '#1e1e1e',
    9: '#1a1a1a',
    10: '#040404',
    11: '#090909',
    12: '#252525',
    13: '#343a40',
    14: '#666',
    15: '#0c0c0c',
    16: '#1f1f1f',
    17: '#1d1d1d',
    18: '#0a0a0a',
    19: '#161616',
    20: '#151515',
    21: '#171717',
    22: '#050505',
    23: '#131313',
    24: '#0f0f0f',
    25: '#111',
    26: '#1f2937',
};

export const gradient = {
    radial: {
        0: `radial-gradient(100% 100% at 100% 0, ${gray[19]} 0, ${black[8]} 100%)`,
        1: `radial-gradient(circle, ${purple[5]} 0%, ${purple[6]} 100%)`,
        2: `radial-gradient(100% 100% at 100% 0, ${blue[10]} 0, ${blue[11]} 100%)`,
        3: `radial-gradient(100% 100% at 100% 0, ${gray[34]} 0, ${gray[24]} 100%)`,
        4: `radial-gradient(100% 100% at 100% 0, ${gray[7]} 0, ${gray[8]} 100%)`,
    },
    linear: {
        0: `linear-gradient(0deg, ${black[15]} 0%, ${black[16]} 100%)`,
        1: `linear-gradient(0deg, ${black[17]} 0%, ${black[2]} 100%)`,
        2: `linear-gradient(0deg, ${black[19]} 0%, ${black[20]} 100%)`,
        3: `linear-gradient(0deg, ${black[21]} 0%, ${gray[28]} 100%)`,
        4: `linear-gradient(0deg, ${black[23]} 0%, ${gray[31]} 100%)`,
        5: `linear-gradient(${gray[32]}, ${black[2]})`,
        6: `linear-gradient(90deg, rgba(${hexToRgb(purple[4])}, 0.78) 0%, ${
            blue.lighten[2]
        } 100%)`,
        7: `linear-gradient(90deg, rgba(${hexToRgb(
            purple[4],
        )}, 0.78) 0%, rgba(${hexToRgb(purple[3])}, 0.65) 100%)`,
        8: `linear-gradient(270deg, ${blue[5]} 0%, ${blue[6]} 100%)`,
    },
};

export const transparency = {
    0: 'transparent',
    1: `rgba(${hexToRgb(gray[4]).join(',')}, 0.8)`,
    2: `rgba(${hexToRgb(blue[15]).join(',')}, 0.075)`,
    3: `rgba(${hexToRgb(blue[2]).join(', ')}, 0.5)`,
    4: `rgba(${hexToRgb(pink[2]).join(', ')}, 0.5)`,
    5: `rgba(${hexToRgb(blue[16]).join(', ')}, 0.05)`,
    6: `rgba(${hexToRgb(blue[16]).join(', ')}, 0.1)`,
    7: `rgba(${hexToRgb(green[2]).join(', ')}, 0.5760504031)`,
    8: `rgba(${hexToRgb(blue[7]).join(', ')}, 0.5760504031)`,
    9: `rgba(${hexToRgb(purple[4]).join(', ')}, 0.7833333162366509)`,
    10: `rgba(${hexToRgb(purple[4]).join(', ')}, 0.7833333162)`,
    11: `rgba(${hexToRgb(purple[3]).join(', ')}, 0.65)`,
    12: `rgba(${hexToRgb(white[1]).join(', ')}, 0.75)`,
    13: `rgba(${hexToRgb(black[2]).join(', ')}, 0.75)`,
    14: `rgba(${hexToRgb(white[1])}, 0.1)`,
    15: `rgba(${hexToRgb(black[1]).join(', ')}, 0.5)`,
    16: `rgba(${hexToRgb(black[11]).join(', ')}, 0.9)`,
};

export const boxShadow = {
    0: `0.2em 0.2em 0.1em 0.05em ${transparency[14]} inset`,
    1: `-0.2em -0.2em 0.1em 0.05em ${transparency[15]} inset`,
    2: `0 0.5em 0.65em 0 rgba(0, 0, 0, 0.3)`,
    3: `0.2em 0.2em 0.1em 0.05em ${transparency[15]} inset`,
    4: `-0.2em -0.2em 0.1em 0.05em ${transparency[14]} inset`,
    5: `inset 2px 1px 3px 0 ${transparency[16]}`,
    6: `1px 1px 0 0 ${black[12]}`,
    7: `0px 0 5px ${blue.lighten[5]}`,
    8: `inset 2px 2px 3px ${purple[0]}`,
    9: `inset -3px -3px 3px ${purple[1]}`,
    10: `inset 0px 1px 0px ${gray[26]}`,
    11: `2px 2px 2px rgba(${hexToRgb(black[1]).join(', ')}, 0.3)`,
    12: `inset 1px 1px 0px ${gray[15]}, 1px 1px 3px ${black[1]}`,
    13: `inset -1px -1px 0px ${gray[27]}, inset 2px 2px 1px ${black[1]}`,
    14: `inset 1px 1px 0 ${gray[29]}, 2px 2px 1px ${black[22]}`,
    15: `inset -1px -1px 0px ${gray[29]}`,
    16: `inset -1px -1px 0px ${gray[26]}`,
    17: `inset 1px 1px 0px rgba(${hexToRgb(black[1]).join(', ')}, 0.3)`,
    18: `0 3px 1px 0 ${transparency[5]}`,
    19: `0 2px 2px 0 ${transparency[6]}`,
    20: `0 3px 3px 0 ${transparency[5]}`,
    21: `0 1px 3px 0px rgba(${hexToRgb(black[24]).join(', ')}, 0.5)`,
    22: `inset 0 1px rgba(${hexToRgb(white[1]).join(', ')}, 0.2)`,
    23: `${purple.darken[1]} 0 0.125rem 0.25rem`,
    24: `${purple.darken[2]} 0 0.4375rem 0.8125rem -0.1875rem`,
    25: `${purple.darken[3]} 0 -0.1875rem 0 inset`,
    26: `${gray[6]} 0 -0.1875rem 0 inset`,

    27: `${gray[16]} 0 0.1875rem 0.4375rem inset`,

    28: `${purple.darken[1]} 0 0.25rem 0.5rem`,
    29: `${purple.darken[2]} 0 0.4375rem 0.8125rem -0.1875rem`,
    30: `${blue[9]} 0 -0.1875rem 0 inset`,
    31: `${gray[6]} 0 -0.1875rem 0 inset`,

    32: `${gray[6]} 0 0.1875rem 0.4375rem inset`,

    33: `0 0 0 ${black[1]}`,

    34: `0 4px 6px -1px rgba(${hexToRgb(black[1]).join(', ')}, 0.1)`,
    35: `0 2px 4px -1px rgba(${hexToRgb(black[1]).join(', ')}, 0.06)`,

    36: `inset 1px 1px 0px ${gray[26]}`,
    37: `1px 1px 3px rgba(${hexToRgb(black[1]).join(', ')}, 0.3)`,
    38: `inset -1px -1px 0px ${gray[32]}`,
    39: `inset 0px 1px 0px ${black[15]}`,
    40: `0 1px 2px 0 rgba(${hexToRgb(black[1]).join(', ')}, 0.05)`,
};

export const textShadow = {
    0: `1px 0 8px ${blue.lighten[5]}`,
    1: `-1px 0 8px ${blue.lighten[5]}`,
    2: `0 1px 1px ${black[1]}`,
    3: `0 1px rgba(${hexToRgb(white[1]).join(', ')}, 0.1)`,
};
