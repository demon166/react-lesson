import Product, {IProduct} from "./Product";

interface ProductListProps {
    products: IProduct[];
    updateProduct: (product: IProduct) => void;
    deleteProduct: (product: IProduct) => void;
}

const ProductList = ({products, updateProduct, deleteProduct}: ProductListProps) => {
    return (
        <table className="table table-bordered mt-3">
            {
                products.length > 0
                    ? products.map((product) => (
                        <Product
                            key={product.id}
                            product={product}
                            updateProduct={updateProduct}
                            deleteProduct={deleteProduct}
                        />
                    ))
                    : (
                        <tr>
                            <td>
                                <h2>Добавьте товары</h2>
                            </td>
                        </tr>

                    )

            }
        </table>
    );
};

export default ProductList;
