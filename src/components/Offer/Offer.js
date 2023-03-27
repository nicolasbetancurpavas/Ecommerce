import offertImg from '../../assets/img/offert.jpg'
import './mobile.css'
export const Offer = () => {
    return (
        <div className="Offert">
            <figure className='ofert__container-img'>
                <img className="img-offter" src={offertImg} alt='img-offert-furniture' />
            </figure>
        </div>
    )
}