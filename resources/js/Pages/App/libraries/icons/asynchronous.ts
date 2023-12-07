import { lazy } from 'react';

export const AnonymousSVG = lazy(() =>
    import('/resources/img/anonymous-person.svg').then((obj) => {
        const { ReactComponent: Svg } = obj;
        return { default: Svg };
    }),
);

export const ArrowSVG = lazy(() =>
    import('/resources/img/down.svg').then((obj) => {
        const { ReactComponent: Svg } = obj;
        return { default: Svg };
    }),
);

export const BackFileSVG = lazy(() =>
    import('/resources/img/back.svg').then((obj) => {
        const { ReactComponent: Svg } = obj;
        return { default: Svg };
    }),
);

export const BrandSVG = lazy(() =>
    import('/resources/img/brand.svg').then((obj) => {
        const { ReactComponent: Svg } = obj;
        return { default: Svg };
    }),
);

export const CalendarIcon = lazy(() =>
    import('/resources/img/calendar.svg').then((obj) => {
        const { ReactComponent: Svg } = obj;
        return { default: Svg };
    }),
);

export const ProductCategorySVG = lazy(() =>
    import('/resources/img/category.svg').then((obj) => {
        const { ReactComponent: Svg } = obj;
        return { default: Svg };
    }),
);

export const CloseSVG = lazy(() =>
    import('/resources/img/closeIcon.svg').then((obj) => {
        const { ReactComponent: Svg } = obj;
        return { default: Svg };
    }),
);

export const CustomerSVG = lazy(() =>
    import('/resources/img/customers.svg').then((obj) => {
        const { ReactComponent: Svg } = obj;
        return { default: Svg };
    }),
);

export const DayModeIcon = lazy(() =>
    import('/resources/img/day-mode.svg').then((obj) => {
        const { ReactComponent: Svg } = obj;
        return { default: Svg };
    }),
);

export const EditSVG = lazy(() =>
    import('/resources/img/edit.svg').then((obj) => {
        const { ReactComponent: Svg } = obj;
        return { default: Svg };
    }),
);

export const GraphSVG = lazy(() =>
    import('/resources/img/graph.svg').then((obj) => {
        const { ReactComponent: Svg } = obj;
        return { default: Svg };
    }),
);

export const InventorySVG = lazy(() =>
    import('/resources/img/inventory.svg').then((obj) => {
        const { ReactComponent: Svg } = obj;
        return { default: Svg };
    }),
);

export const LogoutIcon = lazy(() =>
    import('/resources/img/logout.svg').then((obj) => {
        const { ReactComponent: Svg } = obj;
        return { default: Svg };
    }),
);

export const NightModeIcon = lazy(() =>
    import('/resources/img/night-mode.svg').then((obj) => {
        const { ReactComponent: Svg } = obj;
        return { default: Svg };
    }),
);

export const PlusSVG = lazy(() =>
    import('/resources/img/add.svg').then((obj) => {
        const { ReactComponent: Svg } = obj;
        return { default: Svg };
    }),
);

export const ProductSVG = lazy(() =>
    import('/resources/img/products.svg').then((obj) => {
        const { ReactComponent: Svg } = obj;
        return { default: Svg };
    }),
);

export const PulldownIcon = lazy(() =>
    import('/resources/img/pulldown.svg').then((obj) => {
        const { ReactComponent: Svg } = obj;
        return { default: Svg };
    }),
);

export const RemoveSVG = lazy(() =>
    import('/resources/img/remove.svg').then((obj) => {
        const { ReactComponent: Svg } = obj;
        return { default: Svg };
    }),
);

export const RemoveRedSVG = lazy(() =>
    import('/resources/img/removeRED.svg').then((obj) => {
        const { ReactComponent: Svg } = obj;
        return { default: Svg };
    }),
);

export const SaleSVG = lazy(() =>
    import('/resources/img/sale.svg').then((obj) => {
        const { ReactComponent: Svg } = obj;
        return { default: Svg };
    }),
);

export const SelectCustomerSVG = lazy(() =>
    import('/resources/img/selectCustomer.svg').then((obj) => {
        const { ReactComponent: Svg } = obj;
        return { default: Svg };
    }),
);

export const SelectProductSVG = lazy(() =>
    import('/resources/img/selectProduct.svg').then((obj) => {
        const { ReactComponent: Svg } = obj;
        return { default: Svg };
    }),
);

export const UserSVG = lazy(() =>
    import('/resources/img/user.svg').then((obj) => {
        const { ReactComponent: Svg } = obj;
        return { default: Svg };
    }),
);

export const UploadIcon = lazy(() =>
    import('/resources/img/upload-square-icon.svg').then((obj) => {
        const { ReactComponent: Svg } = obj;
        return { default: Svg };
    }),
);

export const UsersIcon = lazy(() =>
    import('/resources/img/users.svg').then((obj) => {
        const { ReactComponent: Svg } = obj;
        return { default: Svg };
    }),
);

export const AllowSVG = lazy(() =>
    import('/resources/img/allow.svg').then((obj) => {
        const { ReactComponent: Svg } = obj;
        return { default: Svg };
    }),
);

export const ThumbSVG = lazy(() =>
    import('/resources/img/thumb.svg').then((obj) => {
        const { ReactComponent: Svg } = obj;
        return { default: Svg };
    }),
);

export const DetailsSVG = lazy(() =>
    import('/resources/img/details.svg').then((obj) => {
        const { ReactComponent: Svg } = obj;
        return { default: Svg };
    }),
);
