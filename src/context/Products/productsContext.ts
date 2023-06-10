import {createContext, MutableRefObject} from "react";
import {IActionProduct, IProduct} from "../../types";

export const ProductsContext = createContext<IProduct[]>([]);
export const ProductsDispatchContext = createContext<React.Dispatch<IActionProduct>>(() => {});

export const ListProductContext = createContext<MutableRefObject<HTMLTableSectionElement | null>>({current: null});