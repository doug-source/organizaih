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

type ResetPasswordFields = {
    fields?: {
        email: string;
    };
    token: string;
};

type PossibleFields = {
    name: string;
    email: string;
    phone: string | null;
};

type PickFields<T extends keyof PossibleFields> = {
    fields?: Omit<PossibleFields, Exclude<keyof PossibleFields, T>>;
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
                userPhone: number;
                userPhoto: number;
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
            register: ServerInfo & PickFields<'name' | 'email' | 'phone'>;
            registerRequest: ServerInfo & PickFields<'email'>;
            googleAuthUrl?: string;

            resetPassword: ServerInfo & ResetPasswordFields;
            abilities: number[];
            userPhoto: string | null;
        };
        axios: AxiosStatic;
    }
}
