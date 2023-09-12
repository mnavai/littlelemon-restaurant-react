import "./Button.css";
const Button = ({ type, className, children }) => {
  return (
    <button className={className} type={type} data-testid="button">
      {children}
    </button>
  );
};

export default Button;
