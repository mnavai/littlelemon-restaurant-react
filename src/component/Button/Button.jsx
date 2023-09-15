import "./Button.css";
const Button = ({ type, className, children, onClick }) => {
  return (
    <button
      className={className}
      type={type}
      onClick={onClick}
      data-testid="button"
    >
      {children}
    </button>
  );
};

export default Button;
