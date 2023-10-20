export interface IInventoryItem {
    productID: number;
    productName: string;
    productPhoto: string | null;
    utilization: number;
    remain: number;
    cost: number;
}
