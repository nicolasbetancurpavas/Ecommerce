import './mobile.css'
import ilu from '../../assets/img/categories/ilum2.png'
import mesas from '../../assets/img/categories/mesa2.png'
import escritorio from '../../assets/img/categories/escritorio2.png'
import plant from '../../assets/img/categories/planta2.png'

export const Categories = () => {
    return (
        <section className='categories'>
            <div className='container__categories'>
                <figure className='categories__item'>
                    <img src={ilu} className='img__categories'
                        alt='img-categories-potion' />
                    <p>Iluminacion</p>
                </figure>
                <figure className='categories__item'>
                    <img src={plant} className='img__categories'
                        alt='img-categories-potion' />
                    <p>Plantas</p>
                </figure>
                <figure className='categories__item'>
                    <img src={mesas} className='img__categories'
                        alt='img-categories-potion' />
                    <p>Mesas</p>
                </figure>
                <figure className='categories__item'>
                    <img src={escritorio} className='img__categories'
                        alt='img-categories-potion' />
                    <p>Escritorio</p>
                </figure>
            </div>
        </section>
    )
}
