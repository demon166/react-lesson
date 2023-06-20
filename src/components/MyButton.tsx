import classNames from "classnames";
import { useTheme } from "hooks/useTheme";
import { ReactElement } from "react";

interface MyButtonProps {
    children: string | ReactElement | ReactElement[];
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const MyButton = ({ children, type = "button", onClick, disabled = false }: MyButtonProps) => {
    const theme = useTheme();
    const classForButton = classNames(
        "btn",
        { "btn-primary": theme === 'light' },
        { "btn-dark": theme === "dark" }
    );
    return (
        <button disabled={disabled} className={classForButton} type={type} onClick={onClick}>
            {children}
        </button>
    );
};

export default MyButton;
