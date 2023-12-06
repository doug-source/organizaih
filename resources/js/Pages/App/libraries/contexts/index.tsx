import { ReducerSelections } from '@/Pages/App/libraries/types/state';
import { TokenRequest, Translate, TranslateData } from '@/libraries';
import { ComponentProps, ReactNode } from 'react';
import { Loading } from './Loading';
import { Locale } from './Locale';
import { Photo } from './Photo';
import { Selections } from './Selections';
import { Title } from './Title';
import { UserPhoto } from './UserPhoto';
import { WindowSizes } from './WindowSizes';

const data = window.data;
const $html = document.head.parentElement!;
const locale = ($html.getAttribute('lang') || 'pt-BR').replace('-', '_');
const $meta: HTMLMetaElement = document.head.querySelector(
    'meta[name="csrf-token"]',
)!;
const info = {
    translate: {
        data: data as unknown as TranslateData,
        locale,
    },
    tokenRequest: $meta.content || '',
};

type WrapContextsProps = {
    selections: ReducerSelections;
    title: string;
    statusloading: ComponentProps<typeof Loading>['value'];
    windowWidth: ComponentProps<typeof WindowSizes>['width'];
    windowHeight: ComponentProps<typeof WindowSizes>['height'];
    photo: ComponentProps<typeof Photo>['value'];
    userPhoto: ComponentProps<typeof UserPhoto>['value'];
    children: ReactNode;
};

export const WrapContexts = ({
    selections,
    title = '',
    windowWidth,
    windowHeight,
    children,
    statusloading,
    photo,
    userPhoto,
}: WrapContextsProps) => {
    return (
        <WindowSizes
            width={windowWidth}
            height={windowHeight}
        >
            <Loading value={statusloading}>
                <Locale value={locale}>
                    <Title value={title}>
                        <TokenRequest value={info.tokenRequest}>
                            <Selections value={selections}>
                                <Photo value={photo}>
                                    <UserPhoto value={userPhoto}>
                                        <Translate value={info.translate}>
                                            {children}
                                        </Translate>
                                    </UserPhoto>
                                </Photo>
                            </Selections>
                        </TokenRequest>
                    </Title>
                </Locale>
            </Loading>
        </WindowSizes>
    );
};

export { LoadingContext } from './Loading';
export { LocaleContext } from './Locale';
export { PhotoContext } from './Photo';
export { SelectionsContext } from './Selections';
export { TitleContext } from './Title';
export { UserPhotoContext } from './UserPhoto';
export { WindowSizesContext } from './WindowSizes';
