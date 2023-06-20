import { NavLink } from "react-router-dom";
import { IProduct } from "types";
import { useState } from "react";
import classNames from "classnames";

interface ProductListItemProps {
    p: IProduct;
}

const ProductListItem = ({ p }: ProductListItemProps) => {
    const [ isActive, setIsActive ] = useState(false);
    return (
        <li key={p.id} className={classNames("list-group-item", {
            "active": isActive
        })}>
            <NavLink to={p.id.toString()} className={({ isActive }) => {
                setIsActive(isActive);
                return isActive ? "text-white" : "text-black";
            }}>{p.name}</NavLink>
        </li>
    );
};

export default ProductListItem;