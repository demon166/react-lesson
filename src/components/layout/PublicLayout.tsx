import PublicHeader from "components/layout/PublicHeader";
import PublicFooter from "components/layout/PublicFooter";
import { Outlet, useNavigation } from "react-router-dom";

const PublicLayout = () => {
    const navigation = useNavigation();
    /*
    *           {
                    navigation.state === 'loading' && <Spinner/>
                }
    * */
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