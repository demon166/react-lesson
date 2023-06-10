import {forwardRef} from "react";

interface MyInputProps {
    value: string | number;
    name: string;
    type?: "text" | "number";
    placeholder?: string;
    handleChange: React.ChangeEventHandler<HTMLInputElement>;
}

const MyInput = forwardRef<HTMLInputElement, MyInputProps>(({
                     value,
                     name,
                     placeholder = "",
                     type = "text",
                     handleChange,
                 }, ref) => {
    return (
        <div className="mb-3">
            <input
                ref={ref}
                className="form-control"
                type={type}
                name={name}
                onChange={handleChange}
                value={value}
                placeholder={placeholder}
            />
        </div>
    );
});

export default MyInput;
