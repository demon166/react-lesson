import React, {useRef, useState} from 'react';
import MyInput from "../components/MyInput";
import MyButton from "../components/MyButton";
const TestPage = () => {
    const [value, setValue] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);
    const handleClick = () => {
        inputRef.current?.focus();
    }
    const handleChange:  React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setValue(e.target.value);
    }
    return (
        <div>
            <MyInput
                ref={inputRef}
                type="text"
                name="test"
                value={value}
                handleChange={handleChange}
            />
            <MyButton onClick={handleClick}>Focus</MyButton>
        </div>
    );
};

export default TestPage;