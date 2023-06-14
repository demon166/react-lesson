import PublicHeader from "components/layout/PublicHeader";
import PublicFooter from "components/layout/PublicFooter";
import { Outlet } from "react-router-dom";

const PublicLayout = () => {
    return (
        <div>
            <PublicHeader/>
            <main className="container">
                <Outlet/>
            </main>
            <PublicFooter/>
        </div>
    );
};

export default PublicLayout;