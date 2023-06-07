interface MyButtonProps {
  children: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const MyButton = ({ children, type = "button", onClick, disabled = false }: MyButtonProps) => {
  return (
    <button disabled={disabled} className="btn btn-primary" type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default MyButton;
