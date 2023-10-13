import { ThemeKey } from '@/settings';
import { AxiosStatic } from 'axios';
import { FunctionComponent } from 'react';

export {};

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
            auth: {
                action?: string;
                status: {
                    errors: {
                        status?: [string];
                    };
                };
            };
            apiVersion: string;
            tokenAuth: string;
        };
        axios: AxiosStatic;
    }
}
