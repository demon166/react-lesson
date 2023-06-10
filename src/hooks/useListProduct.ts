import {useContext} from "react";
import {ListProductContext} from "../context/Products/productsContext";

export const useListProduct = () => {
    return useContext(ListProductContext);
}