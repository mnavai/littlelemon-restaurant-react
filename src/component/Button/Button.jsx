import "./Button.css";
const Button = ({ type, className, children, onSubmit }) => {
  return (
    <button className={className} type={type} onSubmit={onSubmit} data-testid="button">
      {children}
    </button>
  );
};

export default Button;
