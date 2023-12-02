import { ThemeKey } from '@/settings';

export type AppThemeMeasures = {
    anonymous: {
        list: {
            photo: {
                svg: {
                    size: number;
                };
            };
        };
    };
    backBtn: {
        margin: {
            left: number;
            top: number;
        };
        svg: {
            size: number;
        };
    };
    body: {
        section: {
            padding: {
                top: number;
            };
        };
        padding: number;
    };
    boundaryDateInputs: {
        gap: number;
        wide: {
            gap: number;
        };
        datepicker: {
            padding: {
                top: number;
                bottom: number;
                left: number;
                right: number;
            };
            wide: {
                padding: {
                    top: number;
                    bottom: number;
                    left: number;
                    right: number;
                };
            };
        };
    };
    config: {
        fieldset: {
            border: {
                width: number;
            };
            borderRadius: number;
            padding: number;
            legend: {
                border: {
                    width: number;
                    radius: number;
                };
                padding: {
                    top: number;
                    bottom: number;
                    left: number;
                    right: number;
                };
                margin: {
                    left: number;
                };
            };
            label: {
                fontSize: number;
            };
            siblings: {
                margin: {
                    top: number;
                };
            };
        };
        gateSwitcher: {
            padding: {
                bottom: number;
            };
        };
        icon: {
            size: number;
            wrapper: {
                gap: number;
            };
        };
        langSwitcher: {
            padding: number;
            flag: {
                width: number;
                wide: {
                    margin: {
                        left: number;
                    };
                };
                wrapper: {
                    gap: number;
                };
            };
        };
    };
    confirmDialog: {
        footer: {
            btn: {
                active: {
                    transform: {
                        translate: [number, number];
                    };
                };
                border: {
                    radius: number;
                };
                height: number;
                hover: {
                    transform: {
                        translate: [number, number];
                    };
                };
                padding: number;
                yes: {
                    margin: {
                        left: number;
                    };
                };
            };
        };
    };
    customer: {
        container: {
            wide: {
                gap: number;
            };
        };
        filtersBar: {
            gap: number;
        };
        form: {
            base: {
                formField: {
                    photo: {
                        label: {
                            margin: {
                                left: number;
                            };
                        };
                        error: {
                            margin: {
                                left: number;
                            };
                        };
                    };
                };
            };
        };
    };
    datepicker: {
        calendar: {
            border: {
                width: number;
                radius: number;
            };
            header: {
                middle: {
                    fontSize: number;
                    padding: {
                        top: number;
                        bottom: number;
                        left: number;
                        right: number;
                    };
                    wordSpacing: number;
                };
                arrow: {
                    border: {
                        width: number;
                    };
                };
                arrowLeft: {
                    border: {
                        right: number;
                    };
                    left: number;
                };
                arrowRight: {
                    border: {
                        left: number;
                    };
                    right: number;
                };
                spacer: {
                    border: {
                        top: number;
                    };
                };
            };
            main: {
                cell: {
                    letterSpacing: number;
                    padding: {
                        top: number;
                        bottom: number;
                        left: number;
                        right: number;
                    };
                };
                dateCell: {
                    fontSize: number;
                    highlighted: {
                        before: {
                            top: number;
                            left: number;
                            size: string;
                            sizePlus: number;
                            border: {
                                width: number;
                            };
                        };
                    };
                    today: {
                        after: {
                            border: {
                                width: number;
                            };
                        };
                    };
                    border: {
                        width: number;
                    };
                };
                months: {
                    fontSize: number;
                    border: {
                        width: number;
                    };
                    highlighted: {
                        before: {
                            top: number;
                            left: number;
                            size: string;
                            sizePlus: number;
                            border: {
                                width: number;
                            };
                        };
                    };
                    present: {
                        after: {
                            border: {
                                size: number;
                            };
                        };
                    };
                };
                weekDay: {
                    border: {
                        size: number;
                    };
                    fontSize: number;
                };
            };
        };
        input: {
            width: number;
            textIndent: number;
        };
        icon: {
            left: number;
            size: number;
        };
        label: {
            border: {
                bottom: {
                    leftRadius: number;
                };
                top: {
                    leftRadius: number;
                };
                width: number;
            };
            fontSize: number;
            lineHeight: number;
            wide: {
                lineHeight: number;
            };
            width: number;
        };
    };
    defaultForm: {
        height: string;
        gap: number;
    };
    defineItem: {
        border: {
            radius: number;
        };
        first: {
            minHeight: number;
            padding: {
                left: number;
            };
        };
        remain: {
            padding: {
                left: number;
            };
        };
        label: {
            fontSize: number;
        };
        value: {
            fontSize: number;
        };
    };
    definePhoto: {
        size: number;
        margin: number;
        border: {
            radius: number;
        };
    };
    details: {
        container: {
            gap: number;
        };
    };
    dialog: {
        close: {
            width: number;
            top: number;
            right: number;
        };
        footer: {
            padding: {
                top: number;
                bottom: number;
                left: number;
                right: number;
            };
        };
        header: {
            padding: {
                top: number;
                bottom: number;
                left: number;
                right: number;
            };
            title: { fontSize: number };
        };
        main: {
            paragraph: {
                margin: string;
                fontSize: number;
            };
        };
        section: {
            minWidth: number;
            width: string;
            minHeight: number;
            height: string;
            borderRadius: number;
        };
    };
    dropdown: {
        border: {
            width: Record<ThemeKey, number>;
            radius: Record<ThemeKey, number>;
        };
        padding: {
            right: number;
            left: number;
        };
        pseudo: {
            size: number;
            before: {
                transform: {
                    translate: {
                        x: string;
                        y: string;
                    };
                };
                borderWidth: {
                    left: number;
                    right: number;
                    bottom: number;
                };
            };
            after: {
                transform: {
                    translate: {
                        x: string;
                        y: string;
                    };
                };
                borderWidth: {
                    left: number;
                    right: number;
                    top: number;
                };
            };
        };
    };
    entryActionsItem: {
        right: number;
    };
    entryDataItem: {
        gap: number;
    };
    entryItem: {
        padding: number;
        first: {
            border: {
                topRight: {
                    radius: number;
                };
            };
        };
        last: {
            border: {
                bottomRight: {
                    radius: number;
                };
            };
        };
    };
    entryList: {
        gap: number;
    };
    formItem: {
        errorMsg: {
            border: {
                radius: number;
                width: number;
            };
            padding: {
                top: number;
                bottom: number;
                left: number;
                right: number;
            };
        };
        height: number;
    };
    gateSwitcher: {
        label: {
            after: {
                border: {
                    radius: number;
                };
                height: number;
                left: number;
                width: number;
            };
            before: {
                border: {
                    radius: number;
                };
                height: number;
                margin: {
                    right: number;
                };
                width: number;
            };
            fontSize: number;
            lineHeight: number;
            switchTextX: {
                margin: {
                    right: number;
                };
            };
        };
        switch: {
            checked: {
                label: {
                    transform: {
                        translate: [number, number];
                    };
                };
            };
        };
    };
    graph: {
        gateSwitcher: {
            label: {
                height: number;
            };
        };
        menu: {
            item: {
                minWidth: number;
                icon: {
                    default: {
                        bars: {
                            size: number;
                        };
                    };
                    bars: {
                        container: {
                            padding: {
                                top: number;
                            };
                        };
                        products: {
                            transform: {
                                translate: [number, number];
                            };
                        };
                        customers: {
                            transform: {
                                translate: [number, number];
                            };
                        };
                    };
                };
                linkedBtn: {
                    container: {
                        margin: {
                            top: number;
                            bottom: number;
                            left: number;
                            right: number;
                        };
                        border: {
                            radius: number;
                        };
                    };
                    btn: {
                        padding: {
                            top: number;
                            bottom: number;
                            left: number;
                            right: number;
                        };
                        border: {
                            radius: number;
                        };
                    };
                };
                title: {
                    fontSize: number;
                    line: {
                        lineHeight: number;
                    };
                };
            };
        };
        qtyBars: {
            datepicker: {
                width: number;
                padding: number;
            };
            filtersBar: {
                rowGap: number;
                gap: number;
            };
            axis: {
                xGroup: {
                    fontSize: number;
                    tickGroup: {
                        text: {
                            transform: {
                                translate: [number, number];
                                rotate: string;
                            };
                        };
                    };
                };
            };
        };
    };
    header: {
        border: {
            width: number;
            radius: number;
        };
        closed: {
            height: number;
        };
        dashboard: {
            navbarNav: {
                height: {
                    diff: number;
                };
                padding: {
                    top: number;
                    bottom: number;
                    left: string;
                    right: string;
                };
                wide: {
                    padding: {
                        top: number;
                        bottom: number;
                        left: number;
                        right: number;
                    };
                    margin: {
                        top: number;
                        bottom: number;
                        left: number;
                        right: number;
                    };
                    borderRadius: number;
                    border: {
                        width: number;
                    };
                    height: {
                        diff: number;
                    };
                };
                navItem: {
                    height: number;
                    borderRadius: number;
                    fontSize: number;
                    width: string;
                    wide: {
                        width: string;
                        height: number;
                        spacing: {
                            marginTop: number;
                        };
                    };
                    navLink: {
                        icon: {
                            size: number;
                            wide: {
                                top: number;
                            };
                            graph: {
                                path: {
                                    1: {
                                        strokeWidth: number;
                                    };
                                    2: {
                                        strokeWidth: number;
                                    };
                                    3: {
                                        strokeWidth: number;
                                    };
                                    4: {
                                        strokeWidth: number;
                                    };
                                };
                            };
                        };
                        label: {
                            bottom: number;
                        };
                    };
                    pack: {
                        wide: {
                            width: string;
                            height: number;
                        };
                        after: {
                            wide: {
                                width: number;
                                height: number;
                                borderRadius: number;
                                transform: {
                                    translate: [string, string];
                                };
                            };
                        };
                    };
                };
            };
        };
        height: number;
        topItem: {
            closed: {
                minHeight: string;
            };
            height: string;
            leftItems: {
                heading2: {
                    fontSize: number;
                    medium: {
                        fontSize: number;
                    };
                    wide: {
                        fontSize: number;
                    };
                };
                titleSpan: {
                    marginLeft: number;
                };
            };
            padding: {
                top: number;
                bottom: number;
                left: number;
                right: number;
            };
            pulldown: {
                btn: {
                    height: string;
                    width: number;
                    transform: {
                        translate: [number, number];
                    };
                };
            };
            rightItems: {
                height: number;
                navBarBrand: {
                    svg: {
                        width: number;
                    };
                };
                spacing: {
                    marginLeft: number;
                };
                wideLogout: {
                    svg: {
                        size: number;
                    };
                };
            };
        };
    };
    html: {
        lineHeight: number;
    };
    inputForm: {
        width: string;
    };
    inputRange: {
        slider: {
            control: {
                border: {
                    radius: number;
                };
                fontSize: number;
                height: number;
                width: number;
            };
            currentValue: {
                after: {
                    border: {
                        width: number;
                    };
                };
                border: {
                    radius: number;
                };
                height: number;
                padding: {
                    top: number;
                    bottom: number;
                    left: number;
                    right: number;
                };
                size: number;
                width: number;
            };
            input: {
                width: number;
                height: number;
            };
            label: {
                fontSize: number;
            };
            leftBorder: {
                height: number;
                left: number;
            };
            pack: {
                after: {
                    edgeLower: {
                        height: number;
                    };
                };
                before: {
                    edgeUpper: {
                        widthRemoved: number;
                        height: number;
                    };
                };
                border: {
                    radius: number;
                };
                gap: number;
            };
            rightBorder: {
                right: number;
            };
            stdBorder: {
                width: number;
            };
        };
        qtyText: {
            fontSize: number;
        };
    };
    inventory: {
        details: {
            defineItems: {
                border: {
                    radius: number;
                };
                wrap: {
                    padding: number;
                };
                entries: {
                    marginTop: number;
                };
            };
        };
        form: {
            base: {
                padding: {
                    top: number;
                };
                inventoryData: {
                    container: {
                        height: string;
                        gap: number;
                    };
                };
            };
        };
        textItem: {
            qty: {
                fontSize: number;
            };
        };
    };
    itemEditor: {
        section: {
            borderRadius: number;
            padding: number;
            border: {
                width: number;
            };
            item: {
                gap: number;
                height: string;
                itemData: {
                    dataInputs: {
                        gap: number;
                        input: {
                            minWidth: number;
                        };
                    };
                    gap: number;
                    generalItem: {
                        borderRadius: number;
                        data: {
                            borderRadius: number;
                            border: {
                                width: Record<ThemeKey, number>;
                            };
                        };
                        pack: {
                            padding: number;
                            fontSize: number;
                            value: {
                                borderRadius: number;
                            };
                        };
                    };
                    height: string;
                    minWidth: number;
                };
            };
        };
        iconPhoto: {
            overview: {
                width: number;
                minWidth: number;
                height: number;
                borderRadius: number;
            };
        };
        futureBtns: {
            width: number;
            include: {
                borderRadius: number;
                icon: {
                    size: number;
                    borderRadius: number;
                };
                transform: {
                    translate: [number, number];
                };
            };
            remove: {
                borderRadius: number;
                icon: {
                    borderRadius: number;
                    size: number;
                };
                transform: {
                    translate: [number, number];
                };
            };
        };
    };
    itemSaver: {
        overview: {
            size: number;
            borderRadius: number;
        };
        list: {
            data: {
                values: {
                    gap: number;
                    fontSize: number;
                };
            };
            gap: number;
            height: string;
            padding: number;
            includeItem: {
                borderRadius: number;
                border: {
                    width: number;
                };
                btns: {
                    include: {
                        borderRadius: number;
                        icon: {
                            borderRadius: number;
                            width: number;
                        };
                    };
                    return: {
                        borderRadius: number;
                        icon: {
                            borderRadius: number;
                            transform: {
                                rotate: string;
                            };
                            width: number;
                        };
                    };
                };
                maxWidth: string;
                padding: number;
            };
        };
        section: {
            borderRadius: number;
            border: {
                width: number;
            };
        };
    };
    list: {
        pack: {
            border: {
                width: Record<ThemeKey, number>;
            };
            gap: number;
            padding: {
                top: number;
                bottom: number;
                left: number;
                right: number;
            };
        };
        btns: {
            active: {
                transform: {
                    translate: {
                        x: number;
                        y: number;
                    };
                };
            };
            border: {
                radius: Record<ThemeKey, number>;
            };
            container: {
                flex: number;
                minWidth: number;
            };
            hover: {
                transform: {
                    translate: {
                        x: number;
                        y: number;
                    };
                };
            };
            item: {
                gap: number;
            };
            svg: {
                size: number;
            };
        };
        dataListItem: {
            photo: {
                img: {
                    size: string;
                    border: {
                        radius: number;
                    };
                    overview: {
                        size: number;
                        left: string;
                        top: string;
                    };
                    container: {
                        size: number;
                    };
                };
            };
        };
        empty: {
            gap: number;
            padding: {
                top: number;
                bottom: number;
                left: number;
                right: number;
            };
            border: {
                radius: number;
            };
        };
        gap: Record<ThemeKey, number>;
    };
    loading: {
        size: number;
    };
    main: {
        closed: {
            height: {
                diff: number;
            };
        };
        container: {
            margin: {
                top: number;
            };
        };
        containerFluid: {
            width: string;
            height: string;
            wide: {
                padding: {
                    top: number;
                    bottom: number;
                    left: number;
                    right: number;
                };
            };
        };
        height: {
            diff: number;
        };
        row: {
            height: string;
        };
        spacer: {
            width: number;
        };
    };
    pagination: {
        groups: {
            btn: {
                padding: number;
                border: {
                    radius: number;
                };
                flex: {
                    grow: number;
                    shrink: number;
                    basis: string;
                };
                selected: {
                    after: {
                        width: string;
                        height: string;
                        border: {
                            radius: number;
                        };
                    };
                };
            };
            gap: number;
        };
        pages: {
            btn: {
                padding: {
                    default: number;
                    mobile: number;
                    left: number;
                    right: number;
                };
                border: {
                    radius: number;
                };
                icon: {
                    size: number;
                    rotation: string;
                };
            };
            total: {
                padding: number;
            };
        };
    };
    photoFile: {
        container: {
            marginLeft: number;
            padding: number;
            width: number;
            height: number;
            border: {
                width: number;
            };
            borderRadius: number;
            heading: {
                fontSize: number;
                maxWidth: number;
                lineHeight: number;
            };
        };
        icon: {
            flexBasis: number;
            height: string;
        };
        input: {
            height: string;
            width: {
                diff: number;
            };
        };
    };
    previewPhotoInput: {
        marginRight: number;
        svg: {
            width: number;
            height: number;
        };
    };
    product: {
        category: {
            dataListItem: {
                padding: number;
            };
            tools: {
                gap: number;
                margin: {
                    top: number;
                };
                inputRequest: {
                    label: {
                        gap: number;
                    };
                };
                wide: {
                    gap: number;
                    margin: {
                        top: number;
                    };
                };
            };
        };
        itemSaver: {
            productsIcon: {
                size: number;
                transform: {
                    translate: [number, number];
                };
            };
        };
        itemEditor: {
            productsIcon: {
                size: number;
            };
        };
        defineItem: {
            container: {
                gap: number;
                height: string;
            };
        };
        form: {
            base: {
                formItem: {
                    categoryInfo: {
                        padding: {
                            top: number;
                            bottom: number;
                            left: number;
                            right: number;
                        };
                        border: {
                            width: number;
                        };
                        borderRadius: number;
                        selectCategoryLink: {
                            padding: {
                                top: number;
                                bottom: number;
                                left: number;
                                right: number;
                            };
                        };
                    };
                    photo: {
                        label: {
                            margin: {
                                left: number;
                            };
                        };
                    };
                };
            };
        };
    };
    profilePhoto: {
        padding: {
            top: number;
            bottom: number;
        };
    };
    productCategory: {
        tools: {
            categoriesBtn: {
                svg: {
                    width: number;
                    height: string;
                };
                text: {
                    margin: {
                        left: number;
                    };
                };
            };
        };
    };
    radioToggle: {
        label: {
            padding: {
                top: number;
                bottom: number;
                left: number;
                right: number;
            };
            border: {
                width: number;
            };
            fontSize: number;
            lineHeight: string;
            edgeLeftBorderRadius: [number, number, number, number];
            edgeRightBorderRadius: [number, number, number, number];
            edgeBorderRadius: [number, number, number, number];
        };
    };
    registerRequest: {
        details: {
            container: {
                gap: number;
            };
        };
    };
    requestBtn: {
        maxHeight: number;
    };
    sale: {
        details: {
            defineItems: {
                borderRadius: number;
                container: {
                    gap: number;
                };
                saleProducts: {
                    borderBottom: {
                        radius: number;
                    };
                    item: {
                        defineItem: {
                            padding: {
                                top: number;
                                bottom: number;
                                left: number;
                                right: number;
                            };
                        };
                        fontSize: number;
                    };
                };
                wrap: {
                    fontSize: number;
                    global: {
                        fontSize: number;
                    };
                    padding: number;
                };
            };
        };
        filtersBar: {
            gap: number;
            wide: {
                gap: number;
            };
        };
        form: {
            base: {
                notice: {
                    border: {
                        radius: number;
                    };
                    label: {
                        padding: number;
                    };
                    value: {
                        border: {
                            radius: number;
                        };
                        fontSize: number;
                        padding: number;
                    };
                };
                padding: {
                    top: number;
                };
                saleSelectors: {
                    customerInfo: {
                        icon: {
                            size: number;
                        };
                    };
                };
                topRow: {
                    transform: {
                        translate: [number, number];
                    };
                    wide: {
                        gap: number;
                    };
                };
            };
        };
        list: {
            item: { child: { fontSize: number } };
        };
    };
    selectorsBox: {
        gap: number;
    };
    selectCustomer: {
        icon: {
            size: number;
        };
    };
    selectProduct: {
        icon: {
            size: number;
        };
    };
    submitBtn: {
        padding: {
            top: number;
            bottom: number;
        };
    };
    tools: {
        addBtn: {
            svg: {
                width: number;
                height: string;
                path: {
                    stroke: {
                        width: number;
                    };
                };
            };
        };
        bar: {
            padding: number;
            gap: number;
        };
        btn: {
            border: {
                width: number;
                radius: number;
            };
            fontSize: number;
            lineHeight: number;
            padding: {
                left: number;
                right: number;
                wide: {
                    top: number;
                    bottom: number;
                };
            };
        };
        input: {
            border: {
                radius: number;
                width: Record<ThemeKey, number>;
            };
            fontSize: number;
            lineHeight: number;
            padding: {
                left: number;
                right: number;
                top: number;
                bottom: number;
            };
            textIndent: number;
            wide: {
                textIndent: number;
                padding: {
                    right: number;
                };
            };
        };
        inputRequest: {
            btn: {
                border: {
                    width: number;
                };
                active: {
                    transform: {
                        translate: {
                            x: number;
                            y: number;
                        };
                    };
                };
            };
            input: {
                maxWidth: number;
                minWidth: number;
                width: string;
                height: number;
            };
            label: {
                gap: number;
            };
        };
        linkedBtn: {
            btn: {
                padding: {
                    top: number;
                    bottom: number;
                    left: number;
                    right: number;
                };
            };
            container: {
                padding: {
                    top: Record<ThemeKey, number>;
                    bottom: Record<ThemeKey, number>;
                    left: Record<ThemeKey, number>;
                    right: Record<ThemeKey, number>;
                };
                border: {
                    radius: Record<ThemeKey, number>;
                };
            };
        };
    };
    user: {
        filtersBar: {
            gap: number;
        };
    };
    wideScreen: string;
    mediumScreen: string;
    mobileBottomDifference: number;
};
