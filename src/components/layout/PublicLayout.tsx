import PublicHeader from "components/layout/PublicHeader";
import PublicFooter from "components/layout/PublicFooter";

const PublicLayout = () => {
    return (
        <div>
            <PublicHeader/>
            <main className="container"></main>
            <PublicFooter/>
        </div>
    );
};

export default PublicLayout;