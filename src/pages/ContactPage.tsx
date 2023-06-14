import { Link } from "react-router-dom";

const ContactPage = () => {
    return (
        <div>
            <h1>Страница контактов</h1>
            <Link to=".." relative="path">Ссылка</Link>
        </div>
    );
};

export default ContactPage;