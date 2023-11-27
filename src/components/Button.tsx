type ButtonProps = {
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  disabled: boolean;
  className: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, disabled, className, children }) => {
  const defaultStyle = "text-white lg:px-4 px-3 py-2 rounded-md";
  return (
    <button
      className={`${defaultStyle} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >{children}</button>
  )
}

export default Button