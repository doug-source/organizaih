import { ThemeKey } from '@/settings';
import { AxiosStatic } from 'axios';

export {};
declare global {
    interface Window {
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
            authAction: string;
        };
        axios: AxiosStatic;
    }
}
