import { IconPhoto } from '@/Pages/App/Components/ItemSaver/List/IconPhoto';
import { remOutput } from '@/libraries/toolbox/Styling';
import { ComponentPropsWithoutRef } from 'react';
import { css, styled } from 'styled-components';

type OverviewProps = {
    $url: ComponentPropsWithoutRef<typeof IconPhoto>['photo'] & {};
};

export const Overview_ = styled.div<OverviewProps>`
    ${({ theme, $url }) => {
        const overviewMeasure = theme.measures.itemSaver.overview;
        return css`
            align-self: center;
            display: block;
            width: ${remOutput(overviewMeasure.size)};
            height: ${remOutput(overviewMeasure.size)};
            border-radius: ${remOutput(overviewMeasure.borderRadius)};
            background-repeat: no-repeat;
            background-size: 100% 100%;
            background-image: ${`url(/storage/app/${$url})`};
        `;
    }}
`;
