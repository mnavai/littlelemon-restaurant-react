import Button from '../Button/Button';
import './Header.css';
const Header = () => {
    return (
        <div className="header-section">
            <div className='header-left'>
                <div className='text-group'>
                    <h1 className='header-heading'>Little Lemon</h1>
                    <h3 className='header-subheading'>Raleigh</h3>
                    <p className='header-text'>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                </div>
                <div className='btn-group'>
                    <Button className='btn' type='submit'>Reserve a Table</Button>
                </div>
            </div>
            <div className='header-right'>
                <div className='header-img'>
                    <img src="https://little-lemon-weld.vercel.app/static/media/gourmet.0ff5cb7910f43c4d0a52.jpg" alt="HeadeImage"></img>
                </div>
            </div>
        </div>
    );
}
export default Header;