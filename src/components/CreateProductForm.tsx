import { Form } from "react-router-dom";
import MyInput from "components/MyInput";
import MyButton from "components/MyButton";

const CreateProductForm = () => {
    return (
        <Form action="" method="post">
            <MyInput name="name" type="text" placeholder="Название"/>
            <MyInput name="count" type="number" placeholder="Количество"/>
            <MyInput name="price" type="number" placeholder="Цена"/>
            <MyButton type="submit">Отправить</MyButton>
        </Form>
    );
};

export default CreateProductForm;