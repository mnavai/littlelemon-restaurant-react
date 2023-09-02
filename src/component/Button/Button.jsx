import './Button.css';
const Button = ({type, className, children}) => {
    return (
        <button className={className} type={type}>{children}</button>
    );
};

export default Button;