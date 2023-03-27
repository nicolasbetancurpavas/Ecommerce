import './mobile.css'
import plant from '../../assets/img/plantas.png'

export const GrennSection = () => {
    return (
        <figure className='green-section'>
            <img className='img__green-section' src={plant} alt='section-green' />
            <div className='info__green-section'>
                <h4>Disfruta de un ambiente natural</h4>
                <p>diregite a nuestra zona Verde</p>
                <button id='btn' className='btn__green-section'>
                    Ir a zona verde
                </button>
            </div>
        </figure>
    )
}
