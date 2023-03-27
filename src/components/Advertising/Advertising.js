import './mobile.css'
import hogar from '../../assets/img/offert/hogar.png'

export const Advertising = () => {
    return (
        <div className='advertising'>
            <img src={hogar} className='img-advertising' alt='offert-home' />
            <div>
                <h2>Hasta 50%</h2>
                <p>Descuento</p>
                <button className='btn__advertising'>Cupon gratis</button>
            </div>
        </div>
    )
}
