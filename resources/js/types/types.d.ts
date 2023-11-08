import { ThemeKey } from '@/settings';
import { AxiosStatic } from 'axios';
import { FunctionComponent } from 'react';

export {};

type ServerInfo = {
    action?: string;
    status: {
        errors: {
            status?: [string];
        };
    };
};

type RegisterFields = {
    fields?: {
        name: string;
        email: string;
    };
};

declare global {
    interface Window {
        init: (Component: FunctionComponent<{}>) => void;
        data: {
            userNameLogged: string;
            columnSizeDB: {
                productCategory: number;
                productCategoryDescription: number;
                productCategoryObs: number;
                customer: number;
                customerPhone: number;
                product: number;
                productDescription: number;
                productObs: number;
                addressStreet: number;
                addressDistrict: number;
                inventoryMaxQty: number;
                saleMaxQty: number;
            };
            columnPrecisionDB: {
                inventory: number;
                sale: number;
            };
            columnScaleDB: {
                inventory: number;
                sale: number;
            };
            themeKey: ThemeKey;
            apiVersion: string;
            tokenAuth: string;

            auth: ServerInfo;
            register: ServerInfo & RegisterFields;
            googleAuthUrl?: string;
        };
        axios: AxiosStatic;
    }
}
