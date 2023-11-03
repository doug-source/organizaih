import { IconPhoto } from '@/Pages/App/Components/ItemEditor/IconPhoto';
import { remOutput } from '@/libraries/toolbox/Styling';
import { ComponentPropsWithoutRef } from 'react';
import { css, styled } from 'styled-components';

type IconPhotoProps = ComponentPropsWithoutRef<typeof IconPhoto>;
type OverviewProps = {
    $url: IconPhotoProps['photo'] & {};
};

export const Overview_ = styled.span<OverviewProps>`
    ${({ theme, $url }) => {
        const iconPhotoMeasure = theme.measures.itemEditor.iconPhoto;
        return css`
            display: block;
            width: ${remOutput(iconPhotoMeasure.overview.width)};
            height: ${remOutput(iconPhotoMeasure.overview.height)};
            min-width: ${remOutput(iconPhotoMeasure.overview.minWidth)};
            border-radius: ${remOutput(iconPhotoMeasure.overview.borderRadius)};
            align-self: center;
            background-repeat: no-repeat;
            background-size: 100% 100%;
            background-image: ${`url(/storage/app/${$url})`};
        `;
    }}
`;
