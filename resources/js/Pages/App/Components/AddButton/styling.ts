import {
    getAddBtnMeasures,
    getAddBtnTheme,
} from '@/Pages/App/Components/AddButton/libraries';
import { AddIcon } from '@/Pages/App/Components/AddIcon';
import { remOutput } from '@/libraries/toolbox/Styling';
import { css, styled } from 'styled-components';

export const AddIcon_ = styled(AddIcon)`
    ${({ theme }) => {
        const addBtnTheme = getAddBtnTheme(theme);
        const addBtnMeasures = getAddBtnMeasures(theme);
        return css`
            width: ${remOutput(addBtnMeasures.svg.width)};
            height: ${addBtnMeasures.svg.height};
            & > path {
                stroke-width: ${remOutput(
                    addBtnMeasures.svg.path.stroke.width,
                )};
                stroke: ${addBtnTheme.svg.stroke};
            }
        `;
    }}
`;
