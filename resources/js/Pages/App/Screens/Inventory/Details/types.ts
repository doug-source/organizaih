export interface IInventoryItemRemoved {
    inventoryItemID: number;
    createdAt: string;
}

interface IInventoryProductEntry {
    id: number;
    utilization: number;
    remain: number;
    cost: number;
}

export interface IInventoryProduct {
    id: number;
    name: string;
    photo: string | null;
    entries: {
        [k: string]: IInventoryProductEntry[];
    };
}
