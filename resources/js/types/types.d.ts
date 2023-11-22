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
        message: string;
    };
};

type RegisterFields = {
    fields?: {
        name: string;
        email: string;
    };
};

type ResetPasswordFields = {
    fields?: {
        email: string;
    };
    token: string;
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
                userName: number;
                userEmail: number;
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

            resetPassword: ServerInfo & ResetPasswordFields;
            abilities: number[];
        };
        axios: AxiosStatic;
    }
}
