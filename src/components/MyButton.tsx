interface MyButtonProps {
  children: string;
  type?: "button" | "submit" | "reset";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const MyButton = ({ children, type = "button", onClick }: MyButtonProps) => {
  return (
    <button type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default MyButton;
