interface MyInputProps {
    value: string | number;
    name: string;
    type?: "text" | "number";
    placeholder?: string;
    handleChange: React.ChangeEventHandler<HTMLInputElement>;
}

const MyInput = ({
                     value,
                     name,
                     placeholder = "",
                     type = "text",
                     handleChange,
                 }: MyInputProps) => {
    return (
        <div className="mb-3">
            <input
                className="form-control"
                type={type}
                name={name}
                onChange={handleChange}
                value={value}
                placeholder={placeholder}
            />
        </div>
    );
};

export default MyInput;
