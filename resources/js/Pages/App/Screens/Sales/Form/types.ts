interface ISaleProduct {
    saleItemID: number;
    productID: number;
    productName: string;
    productPhoto: string | null;
    qty: number;
    price: number;
}

export interface ISale {
    createdAt: string;
    customerID: number;
    customerName: string;
    customerPhoto: string | null;
    products: ISaleProduct[];
}
