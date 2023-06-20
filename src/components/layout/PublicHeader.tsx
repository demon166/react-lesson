import { NavLink } from "react-router-dom";
import classNames from "classnames";

const PublicHeader = () => {
    const classForLink = ({ isActive }: { isActive: boolean, isPending: boolean }) => {
        return classNames("nav-link px-2", isActive ? "text-secondary" : "text-white");
    };
    return (
        <header className="p-3 text-bg-dark">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li><NavLink to="/" className={classForLink}>Главная</NavLink></li>
                        <li><NavLink to="/products" className={classForLink}>Продукты</NavLink></li>
                        <li><NavLink to="/about" className={classForLink}>О нас</NavLink></li>
                        <li><NavLink to="/contact" className={classForLink}>Контакты</NavLink></li>
                    </ul>

                    <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
                        <input type="search" className="form-control form-control-dark text-bg-dark"
                               placeholder="Search..." aria-label="Search"/>
                    </form>

                    <div className="text-end">
                        <button type="button" className="btn btn-outline-light me-2">Login</button>
                        <button type="button" className="btn btn-warning">Sign-up</button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default PublicHeader;