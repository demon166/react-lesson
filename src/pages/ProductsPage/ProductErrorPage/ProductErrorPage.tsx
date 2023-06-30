import {isRouteErrorResponse, useRouteError} from "react-router-dom";
import Error404 from "./Error404";

const ProductErrorPage = () => {
    const error = useRouteError();
    let template;
    if (isRouteErrorResponse(error)) {
        if (error.status === 404) {
            template = <Error404 />;
        }
    }
    return (
        <div>
            {
                isRouteErrorResponse(error) ? (
                    template
                ) : (<div>Не известная ошибка</div>)
            }
        </div>
    );
};

export default ProductErrorPage;