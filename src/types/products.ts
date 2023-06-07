export interface IProduct {
    id: number;
    name: string;
    count: number;
    price: number;
    inCart: boolean;
}

export interface IActionProduct {
    type: "add" | "update" | "delete",
    payload: IProduct
}