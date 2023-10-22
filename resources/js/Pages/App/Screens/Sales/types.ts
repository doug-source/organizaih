export interface ISales {
    id: number;
    created_at: string;
    customerID: number;
    customerName: string;
    customerPhoto: string | null;
}

export interface ISaleResponse {
    id: number;
    created_at: string;
    customerID: number;
    customerName: string;
    customerPhoto: string | null;
    productID: number;
}
