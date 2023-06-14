import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 text-center mt-5">
                    <h1>Oops!</h1>
                    <p>Что-то пошло не так</p>
                    {
                        isRouteErrorResponse(error) ? (
                            <div>
                                {error.status} | {error.statusText}
                            </div>
                        ) : (
                            <div>Неизвестная ошибка</div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;