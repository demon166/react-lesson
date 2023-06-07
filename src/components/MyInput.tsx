import { useState } from "react";

interface MyInputProps {
  value: string | number;
  name: string;
  type?: "text" | "number";
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
}

const MyInput = ({
  value,
  name,
  type = "text",
  handleChange,
}: MyInputProps) => {
  return (
    <>
      <input type={type} name={name} onChange={handleChange} value={value} />
    </>
  );
};

export default MyInput;
