import Button from '../Button/Button';
import Card from '../Card/Card';
import './Highlights.css'
const Highlights = () => {
    return (
        <div className="highlights-section">
            <div className='highlights-top-section'>
                <div className='highlights-heading'>
                    <h1>Specials</h1>
                </div>
                <div className='highlights-btn'>
                    <Button className='btn' type='submit'>Online Menu</Button>
                </div>
            </div>
            <div className='highlights-card'>
                <Card className='card'
                      title='Greek Salad'
                      price='$12.99'
                      text='The famous Greek salad of crispy lettuce, peppers, olives and our Chicago styled feta cheese, garnished with crunchy garlic, rosemary croutons.'></Card>
                <Card className='card'
                      title='Bruchetta'
                      price='Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil; made perfect for an evening dinner.'></Card>
                <Card className='card'
                      title='Lemon Desert'
                      price='$5.00'
                      text='This comes straight from Grandma recipe book. Every last ingredient has been sourced and is as authentic as can be imagined.'></Card>
            </div>
        </div>
    );
}
export default Highlights;