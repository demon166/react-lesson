import { forwardRef } from "react";

interface MyInputProps {
    value?: string | number;
    name: string;
    type?: "text" | "number";
    placeholder?: string;
    handleChange?: React.ChangeEventHandler<HTMLInputElement>;
    defaultValue?: string | number;
}

const MyInput = forwardRef<HTMLInputElement, MyInputProps>(({
                                                                value,
                                                                name,
                                                                placeholder = "",
                                                                type = "text",
                                                                handleChange,
                                                                defaultValue,
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
                defaultValue={defaultValue}
            />
        </div>
    );
});

export default MyInput;
