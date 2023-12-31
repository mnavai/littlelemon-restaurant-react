import Button from '../Button/Button';
import './Card.css';

const Card = ({ title, price, text, src, alt }) => {
    return (
        <article className='card-container'>
            <div className='card-img'>
                <img src={src} alt={alt} />
            </div>
            <div className='card-heading'>
                <h3 className='card-title'>{title}</h3>
                <h3 className='card-price'>{price}</h3>
            </div>
            <div className='card-text'>
                <p>{text}</p>
            </div>
            <div className='card-btn'>
                <Button className='btn' type='primary'>Order of Delivery</Button>
            </div>
        </article>
    );
}
export default Card;