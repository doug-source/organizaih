import { HeaderModule } from '.';

type NavbarMargin = { margin: { top: number } };

export const calcNavbarDiff = (
    headerModule: HeaderModule,
    { margin }: NavbarMargin,
) => {
    return headerModule.height + margin.top;
};
