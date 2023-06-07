import {createContext} from "react";
import {IActionProduct, IProduct} from "../../types";

export const ProductsContext = createContext<IProduct[]>([]);
export const ProductsDispatchContext = createContext<React.Dispatch<IActionProduct>>(() => {});