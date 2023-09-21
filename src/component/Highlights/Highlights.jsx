import Button from '../Button/Button';
import Card from '../Card/Card';
import './Highlights.css'
const Highlights = () => {
    return (
        <div className="highlights-section">
            <div className='highlights-top-section'>
                <h1 className='hightlights-heading'>Specials</h1>
                <Button className='btn hightlights-btn' type='submit'>Online Menu</Button>
            </div>
            <article className='highlights-card'>
                <Card className='card'
                      src='https://little-lemon-weld.vercel.app/static/media/salad.00b1567f5a694e5c3945.jpg'
                      alt='greek salad'
                      title='Greek Salad'
                      price='$12.99'
                      text='The famous Greek salad of crispy lettuce, peppers, olives and our Chicago styled feta cheese, garnished with crunchy garlic, rosemary croutons.'></Card>
                <Card className='card'
                      src='https://little-lemon-weld.vercel.app/static/media/bruschetta1.02db8bb7aecd0a390e40.jpg'  
                      title='Bruchetta'
                      price='$5.99'
                      text='Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil; made perfect for an evening dinner.'></Card>
                <Card className='card'
                      src='https://little-lemon-weld.vercel.app/static/media/creme.3a9eaace5be031d2d7a0.jpg'
                      alt='Lemon Desert'  
                      title='Lemon Desert'
                      price='$5.00'
                      text='This comes straight from Grandma recipe book. Every last ingredient has been sourced and is as authentic as can be imagined.'></Card>
            </article>
        </div>
    );
}
export default Highlights;