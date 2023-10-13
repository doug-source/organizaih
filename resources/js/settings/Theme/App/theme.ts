import { ThemeKey } from '@/settings';
import { AppThemeMeasures } from './measures/theme';

type stdBtn = {
    bg: string;
    border: {
        color: string;
    };
    boxShadow: string;
    color: string;
};

type linkedBtn = {
    container: {
        bg: string;
        boxShadow: string;
    };
    btn: {
        bg: string;
        boxShadow: string;
        active: {
            boxShadow: string;
        };
    };
};

type overlay = {
    bg: {
        color: string;
    };
};

export type AppTheme = {
    key: ThemeKey;
    measures: AppThemeMeasures;
    body: {
        bg: {
            color: string;
        };
    };
    config: {
        fieldset: {
            color: string;
            border: {
                color: string;
            };
            legend: {
                border: {
                    color: string;
                };
            };
        };
    };
    confirmDialog: {
        footer: {
            btn: {
                no: {
                    active: {
                        boxShadow: string;
                    };
                    bg: string;
                    hover: {
                        boxShadow: string;
                    };
                };
            };
        };
    };
    customer: {
        container: {
            color: string;
        };
        details: {
            defineItem: {
                female: {
                    bg: string;
                };
                male: {
                    bg: string;
                };
                value: {
                    female: {
                        color: string;
                    };
                    male: {
                        color: string;
                    };
                };
            };
        };
        list: {
            photo: {
                svg: {
                    fill: string;
                };
            };
        };
    };
    datepicker: {
        calendar: {
            bg: string;
            border: {
                color: string;
            };
            header: {
                arrow: {
                    active: {
                        border: {
                            color: string;
                        };
                    };
                    border: {
                        hide: {
                            color: string;
                        };
                        show: {
                            color: string;
                        };
                    };
                    hover: {
                        border: {
                            color: string;
                        };
                    };
                };
                item: {
                    bg: string;
                };
                middle: {
                    color: string;
                };
                spacer: {
                    border: {
                        color: string;
                    };
                };
            };
            main: {
                dateCell: {
                    color: string;
                    border: {
                        color: string;
                    };
                    bg: string;
                    highlighted: {
                        before: {
                            border: {
                                color: string;
                            };
                        };
                        bg: string;
                        color: string;
                        hover: {
                            color: string;
                        };
                    };
                    today: {
                        after: {
                            border: {
                                bottom: string;
                                left: string;
                                top: string;
                            };
                        };
                        color: string;
                        currMonth: {
                            color: string;
                        };
                        hover: {
                            color: string;
                            bg: string;
                        };
                        prevMonth: {
                            color: string;
                        };
                    };
                };
                weekdays: {
                    color: string;
                    border: {
                        color: string;
                    };
                };
                months: {
                    border: {
                        color: string;
                    };
                    highlighted: {
                        before: {
                            border: { color: string };
                        };
                        bg: string;
                        color: string;
                    };
                    hover: {
                        bg: string;
                        color: string;
                    };
                    present: {
                        after: {
                            border: {
                                bottom: string;
                                left: string;
                                top: string;
                            };
                        };
                        bg: string;
                        color: string;
                        hover: {
                            bg: string;
                            color: string;
                        };
                    };
                };
            };
        };
        dropdown: {
            content: {
                bg: string;
            };
        };
        icon: {
            fill: string;
        };
        label: {
            border: {
                color: string;
            };
            color: string;
        };
    };
    dialog: {
        closeIcon: {
            fill: string;
        };
        footer: {
            btn: {
                active: {
                    boxShadow: string;
                };
                boxShadow: string;
                bg: string;
                color: string;
                hover: {
                    boxShadow: string;
                };
            };
        };
        overlay: overlay;
        section: {
            bg: string;
        };
    };
    dropdown: {
        bg: string;
        border: {
            color: string;
        };
        boxShadow: string;
        pseudo: {
            before: {
                borderColor: {
                    left: string;
                    right: string;
                    bottom: string;
                };
            };
            after: {
                borderColor: {
                    left: string;
                    right: string;
                    top: string;
                };
            };
        };
    };
    formItem: {
        error: {
            color: string;
        };
        errorMsg: {
            bg: string;
            color: string;
            border: {
                color: string;
            };
        };
    };
    gateSwitcher: {
        label: {
            color: string;
            before: {
                bg: string;
            };
            after: {
                bg: string;
                boxShadow: string;
            };
        };
        switch: {
            checked: {
                label: {
                    bg: string;
                };
            };
        };
    };
    graph: {
        bar: {
            qty: {
                qtyText: {
                    fill: string;
                };
                slider: {
                    control: {
                        active: {
                            bg: string;
                            boxShadow: string;
                        };
                        bg: string;
                        boxShadow: string;
                        color: string;
                        hover: {
                            bg: string;
                        };
                        icon: {
                            before: {
                                textShadow: string;
                                actived: {
                                    color: string;
                                    textShadow: string;
                                };
                            };
                        };
                    };
                    currentValue: {
                        after: {
                            border: {
                                bottom: {
                                    color: string;
                                };
                                top: {
                                    color: string;
                                };
                                right: {
                                    color: string;
                                };
                            };
                        };
                        bg: string;
                        color: string;
                    };
                    label: {
                        color: string;
                    };
                    leftBorder: {
                        before: {
                            bg: string;
                        };
                    };
                    pack: {
                        bg: string;
                        after: {
                            edgeLower: {
                                bg: string;
                            };
                        };
                        before: {
                            edgeUpper: {
                                bg: string;
                            };
                        };
                    };
                    stdBorder: {
                        bg: string;
                    };
                };
                refLine: {
                    stroke: {
                        color: string;
                    };
                };
                rect: {
                    fill: string;
                    selected: {
                        fill: string;
                    };
                };
            };
        };
        menu: {
            item: {
                linkedBtn: {
                    container: {
                        bg: linkedBtn['container']['bg'];
                    };
                    btn: {
                        bg: linkedBtn['btn']['bg'];
                    };
                };
                title: {
                    color: string;
                };
                icon: {
                    default: {
                        bars: {
                            fills: {
                                column1: string;
                                column2: string;
                                column3: string;
                                column4: string;
                                base: string;
                                arrow: string;
                            };
                            mini: {
                                size: number;
                            };
                        };
                    };
                    bars: {
                        product: {
                            box: {
                                fill: string;
                                stroke: string;
                            };
                            tape: {
                                fill: string;
                                stroke: string;
                            };
                        };
                        customer: {
                            two: {
                                fill: string;
                            };
                        };
                    };
                };
            };
        };
        qtyText: {
            fill: string;
        };
    };
    header: {
        border: {
            color: string;
        };
        dashboard: {
            dashboardItem: {
                inventoryIcon: {
                    paperLeaf: {
                        fill: string;
                    };
                };
            };
            navbarNav: {
                color: string;
                navItem: {
                    link: {
                        color: string;
                        svg: {
                            customer: {
                                fill: {
                                    1: string;
                                    2: string;
                                    3: string;
                                };
                            };
                            product: {
                                box: {
                                    fill: string;
                                    stroke: string;
                                };
                                tape: {
                                    fill: string;
                                    stroke: string;
                                };
                            };
                            graph: {
                                path: {
                                    1: {
                                        fill: string;
                                    };
                                    2: {
                                        fill: string;
                                    };
                                    3: {
                                        fill: string;
                                    };
                                    4: {
                                        fill: string;
                                    };
                                    5: {
                                        fill: string;
                                    };
                                    6: {
                                        fill: string;
                                    };
                                };
                            };
                            logout: {
                                path: {
                                    fill: string;
                                };
                            };
                        };
                    };
                    pack: {
                        wide: {
                            after: {
                                bgColor: string;
                                bgImage: string;
                            };
                        };
                    };
                };
                wide: {
                    bgColor: string;
                    border: {
                        color: string;
                    };
                };
            };
        };
        topItem: {
            bg: string;
            color: string;
            pulldown: {
                mark: {
                    fill: string;
                };
            };
            svg: { path: { fill: string } };
        };
    };
    inputRequest: {
        btn: stdBtn;
    };
    inventory: {
        details: {
            defineItems: {
                bg: string;
                color: string;
                entry: {
                    bg: string;
                };
            };
        };
        form: {
            base: {
                submitBtn: {
                    color: string;
                };
            };
        };
    };
    itemEditor: {
        productsIcon: {
            fill: string;
        };
        section: {
            border: {
                color: string;
            };
            item: {
                itemData: {
                    generalItem: {
                        data: {
                            bg: string;
                            color: string;
                            border: {
                                color: string;
                            };
                        };
                        pack: {
                            value: {
                                bg: string;
                            };
                        };
                    };
                };
            };
        };
        futureBtns: {
            include: {
                icon: {
                    fill: string;
                    stroke: string;
                };
            };
            remove: {
                icon: {
                    fill: string;
                };
            };
        };
    };
    itemSaver: {
        list: {
            includeItem: {
                bg: string;
                border: {
                    color: string;
                };
                btns: {
                    include: {
                        icon: {
                            fill: string;
                        };
                    };
                    return: {
                        icon: {
                            fill: string;
                            stroke: string;
                        };
                    };
                };
            };
        };
        section: {
            border: {
                color: string;
            };
        };
    };
    list: {
        empty: {
            bg: {
                color: string;
                image: string;
            };
            color: string;
        };
        item: {
            hover: {
                color: string;
            };
        };
        dataListItem: {
            bg: {
                color: string;
            };
            color: string;
            border: {
                top: {
                    color: string;
                };
            };
            photo: {
                img: {
                    overview: {
                        bg: {
                            color: string;
                        };
                    };
                };
            };
            btns: {
                boxShadow: string;
                primary: {
                    bg: {
                        color: string;
                    };
                    border: {
                        color: string;
                    };
                    svg: {
                        path: {
                            stroke: string;
                            fill: string;
                        };
                    };
                };
                danger: {
                    bg: {
                        color: string;
                    };
                    border: {
                        color: string;
                    };
                    svg: {
                        path: {
                            stroke: string;
                            fill: string;
                        };
                    };
                };
            };
        };
    };
    pagination: {
        groups: {
            btn: {
                color: string;
                bg: string;
                boxShadow: string;
                selected: {
                    color: string;
                    textShadow: string;
                    bg: string;
                    after: {
                        boxShadow: string;
                    };
                };
            };
        };
        page: {
            btn: {
                svg: {
                    path: {
                        fill: string;
                    };
                };
            };
        };
    };
    product: {
        form: {
            base: {
                submitBtn: {
                    color: string;
                };
                formItem: {
                    categoryInfo: {
                        border: {
                            color: string;
                        };
                    };
                };
            };
        };
        itemSaver: {
            productsIcon: {
                fill: string;
            };
        };
        itemEditor: {
            productsIcon: {
                fill: string;
            };
        };
        defineItem: {
            icon: {
                path: {
                    fill: string;
                };
            };
            value: {
                color: string;
            };
        };
    };
    productCategory: {
        form: {
            base: {
                submitBtn: {
                    color: string;
                };
            };
        };
        tools: {
            categoriesBtn: stdBtn;
        };
    };
    profilePhoto: {
        previewPhoto: {
            personCircle: {
                fill: string;
            };
        };
    };
    radioToggle: {
        label: {
            bg: string;
            border: {
                color: string;
            };
            boxShadow: string;
        };
        male: {
            bg: string;
            border: {
                color: string;
            };
            color: string;
            shadowColor: string;
        };
        female: {
            bg: string;
            border: {
                color: string;
            };
            color: string;
            shadowColor: string;
        };
    };
    reactLoading: {
        overlay: overlay;
        svg: {
            fill: string;
        };
    };
    sale: {
        form: {
            base: {
                submitBtn: {
                    color: string;
                };
                notice: {
                    bg: string;
                    color: string;
                    value: {
                        bg: string;
                    };
                };
                saleSelectors: {
                    icons: {
                        customer: {
                            fill: {
                                person: string;
                                hand: string;
                            };
                        };
                    };
                };
            };
        };
        list: {
            item: {
                child: {
                    color: string;
                };
            };
        };
        details: {
            defineItems: {
                bg: string;
                color: string;
                saleProducts: {
                    icon: {
                        path: {
                            fill: string;
                        };
                    };
                    bg: string;
                };
            };
        };
    };
    selectProduct: {
        icon: {
            fill: {
                box: string;
                tape: string;
                hand: string;
            };
        };
    };
    submitForm: stdBtn;
    tools: {
        addBtn: {
            boxShadow: string;
            bg: {
                color: string;
            };
            border: {
                color: string;
            };
            svg: {
                stroke: string;
            };
        };
        btn: {
            color: string;
            border: {
                color: string;
            };
        };
        linkedBtn: linkedBtn;
        stdBtn: stdBtn;
    };
    routes: {
        container: {
            color: string;
        };
    };
};
