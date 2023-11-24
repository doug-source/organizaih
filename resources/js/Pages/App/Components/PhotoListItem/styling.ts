import { PhotoListItem } from '@/Pages/App/Components/PhotoListItem';
import { getImgTheme } from '@/Pages/App/Components/PhotoListItem/libraries';
import { remOutput } from '@/libraries';
import { ComponentPropsWithoutRef } from 'react';
import { styled } from 'styled-components';

type OverviewProps = {
    $url: ComponentPropsWithoutRef<typeof PhotoListItem>['photo'] & {};
};

type ImgProps = ComponentPropsWithoutRef<'img'> & {
    $url: ComponentPropsWithoutRef<typeof PhotoListItem>['photo'] & {};
};

export const Img_ = styled.img.attrs<ImgProps>((props) => ({
    src: `/storage/app/${props.$url}`,
    alt: '',
}))`
    ${({ theme }) => {
        const img = getImgTheme(theme);
        return `
            width: ${img.size};
            height: ${img.size};
            border-radius: ${remOutput(img.border.radius)};
        `;
    }}
    position: relative;
    z-index: 1;
    cursor: pointer;
`;

export const OverviewImg_ = styled.div<OverviewProps>`
    ${({ theme }) => {
        const img = getImgTheme(theme);
        return `
            width: ${remOutput(img.overview.size)};
            height: ${remOutput(img.overview.size)};
            left: ${img.overview.left};
            top: ${img.overview.top};
            border-radius: ${remOutput(img.border.radius)};
        `;
    }}
    position: absolute;
    opacity: 0;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    z-index: 0;
    background-image: ${({ $url }) => `url(/storage/app/${$url})`};
    background-color: ${({ theme }) => theme.list.photo.img.overview.bg.color};

    ${Img_}:hover + & {
        opacity: 1;
        z-index: 1;
    }
`;

export const Container_ = styled.div`
    ${({ theme }) => {
        const img = getImgTheme(theme);
        return `
            width: ${remOutput(img.container.size)};
            height: ${remOutput(img.container.size)};
        `;
    }}
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
`;
