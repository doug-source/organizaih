import {
    getAddBtnMeasures,
    getAddBtnTheme,
} from '@/Pages/App/Components/AddButton/libraries';
import { PlusSVG } from '@/Pages/App/libraries/icons/asynchronous';
import { remOutput } from '@/libraries/toolbox/Styling';
import { css, styled } from 'styled-components';

export const PlusSVG_ = styled(PlusSVG)`
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
