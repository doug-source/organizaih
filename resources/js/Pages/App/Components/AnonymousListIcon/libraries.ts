import { remOutput } from '@/libraries/toolbox/Styling';
import { DefaultTheme } from 'styled-components';

export const getSvgSize = (theme: DefaultTheme) => {
    return remOutput(theme.measures.anonymous.list.photo.svg.size);
};
