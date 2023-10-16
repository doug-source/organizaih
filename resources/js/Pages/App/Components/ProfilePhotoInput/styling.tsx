import { remOutput } from '@/libraries';
import { css, styled } from 'styled-components';

export const ProfilePhoto_ = styled.div`
    ${({ theme }) => {
        const profileMeasure = theme.measures.profilePhoto;
        return css`
            padding-top: ${remOutput(profileMeasure.padding.top)};
            padding-bottom: ${remOutput(profileMeasure.padding.bottom)};
        `;
    }}
`;
