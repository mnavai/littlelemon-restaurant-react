import Button from '../Button/Button';
import './Header.css';
const Header = () => {
    return (
        <div className="header-section">
            <div className='text-group'>
                <h1 className='header-heading'>Little Lemon</h1>
                <h3 className='header-subheading'>Raleigh</h3>
                <p className='header-text'>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            </div>
            <div className='btn-group'>
                <Button className='btn' type='submit'>Reserve a Table</Button>
            </div>
        </div>
    );
}
export default Header;