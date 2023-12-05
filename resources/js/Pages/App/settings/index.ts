import { ICustomer } from '@/Pages/App/Screens/Customer/types';
import { AbilitiesEnum } from '@/Pages/App/libraries/enums/abilities';
import {
    customerTargets,
    productCategoryTargets,
    productTargets,
} from '@/Pages/App/libraries/types/state';
import { DataReducerState } from '@/Pages/App/libraries/types/state/data';
import { DefaultTheme } from 'styled-components';

type SelectionTargetsProps = {
    customer: typeof customerTargets;
    product: typeof productTargets;
    productCategory: typeof productCategoryTargets;
};

export const selectionTargets: SelectionTargetsProps = {
    customer: customerTargets,
    product: productTargets,
    productCategory: productCategoryTargets,
} as const;

export const paginationSetting = {
    pageInitial: 1,
    lastPageInitial: 0,
    totalInitial: 0,
    groupList: [3, 5, 10],
};

const columnSizeRef = window.data.columnSizeDB;
export const columnSizeDB = {
    productCategory: columnSizeRef.productCategory,
    productCategoryDescription: columnSizeRef.productCategoryDescription,
    productCategoryObs: columnSizeRef.productCategoryObs,
    customer: columnSizeRef.customer,
    customerPhone: columnSizeRef.customerPhone,
    product: columnSizeRef.product,
    productDescription: columnSizeRef.productDescription,
    productObs: columnSizeRef.productObs,
    addressStreet: columnSizeRef.addressStreet,
    addressDistrict: columnSizeRef.addressDistrict,
    inventoryMaxQty: columnSizeRef.inventoryMaxQty,
    saleMaxQty: columnSizeRef.saleMaxQty,
    userName: columnSizeRef.userName,
    userEmail: columnSizeRef.userEmail,
    userPhone: columnSizeRef.userPhone,
    userPhoto: columnSizeRef.userPhoto,
};

const columnPrecisionRef = window.data.columnPrecisionDB;
export const columnPrecisionDB = {
    inventory: columnPrecisionRef.inventory,
    sale: columnPrecisionRef.sale,
};

const columnScaleRef = window.data.columnScaleDB;
export const columnScaleDB = {
    inventory: columnScaleRef.inventory,
    sale: columnScaleRef.sale,
};

export const makeEmptySelections: () => DataReducerState['selections'] =
    () => ({
        target: null,
        action: null,
        sales: {
            customer: null,
            product: null,
            salesToSave: [],
        },
        inventories: {
            product: null,
            inventoriesToSave: [],
        },
        products: {
            name: '',
            description: '',
            obs: '',
            category: null,
        },
    });

export const makeEmptyProduct = () => ({
    id: 0,
    name: '',
    photo: '',
    description: '',
    obs: '',
    created_at: '',
    category: {
        id: 1,
        name: '',
        description: '',
        obs: '',
        created_at: '',
    },
});

export const makeEmptyProductCategory = () => ({
    id: 0,
    name: '',
    photo: '',
    description: '',
    obs: '',
});

export const emptyCustomer: ICustomer = {
    id: 0,
    name: '',
    photo: '',
    sex: 'M',
    phone_1: '',
    phone_2: '',
    birthday: null,

    address_id: 0,
    address: {
        street: '',
        number: 1,
        district: '',
        city: {
            id: 0,
            name: '',
        },
        state: {
            id: 0,
            name: '',
        },
    },

    raw_sex: 'M',
    birthday_formatted: '',
    raw_phone1: '',
    raw_phone2: '',
    updated_at: '',
    created_at: '',
};

export const stateCitySelection = {
    stateAcronym: 'RS',
    cityName: 'Sapucaia do Sul',
};

export const sexSettingList = (
    translate: (key: string, uppercase?: boolean) => string,
    { male, female }: DefaultTheme['radioToggle'],
) => [
    {
        value: 'M',
        label: translate('male', true),
        style: {
            backgroundColor: male.bg,
            color: male.color,
            shadowColor: male.shadowColor,
            borderColor: male.border.color,
        },
    },
    {
        value: 'F',
        label: translate('female', true),
        style: {
            backgroundColor: female.bg,
            color: female.color,
            shadowColor: female.shadowColor,
            borderColor: female.border.color,
        },
    },
];

export const barGraphBasic = {
    margins: {
        top: 20,
        bottom: 60,
        right: 10,
        left: 40,
    },
    paddingInner: 0.1,
    paddingOuter: 0.2,
    minItemsQty: 1,
};

const abilities = [...window.data.abilities];

export const hasAbility = (hability: AbilitiesEnum) => {
    return abilities.includes(hability);
};
