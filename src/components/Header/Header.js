import './mobile.css'
import plant from '../../assets/img/nav/plant.png'
import lightning from '../../assets/img/nav/iluminacion.png'
import furniture from '../../assets/img/nav/mesa.png'
import logo from '../../assets/img/Logo.png'
import { useState } from 'react'

export const Header = ({ handleClick }) => {
    const [close, setClose] = useState(false)
    const open = () => setClose(!close)
    const [moreInfo, setMoreInfo] = useState({
        furniture: false,
        plant: false,
        lightning: false
    })
    const more = (category) => {
        const newMoreInfo = { ...moreInfo }
        newMoreInfo[category] = !newMoreInfo[category]
        setMoreInfo(newMoreInfo)
    }
    return (
        <header className="header">
            <div className="header__container">
                <div>
                    <span className='header__item--categorias'
                        onClick={open}
                    >
                        <ion-icon name="filter"></ion-icon>
                    </span>
                    <nav className={`nav-top ${close ? 'open-nav' : 'animacion'}`}>
                        <div className='container__nav-top'>
                            <div className='container-nt'>
                                <figure className='item__nav-top'>
                                    <h4>Muebleria</h4>
                                    <img alt='img-categories-nav' src={furniture} className='img__nav-top' />
                                    <span className={`more-option ${moreInfo.furniture ? 'move' : ''}`}
                                        onClick={() => more("furniture")}
                                    >
                                        <ion-icon name="add"></ion-icon>
                                    </span>
                                </figure>
                                <div className={`more-info__nt ${moreInfo.furniture ? 'open-more-info' : ''}`}>
                                    <p>Mesas</p>
                                    <p>Decoracion</p>
                                    <p>Alceda</p>
                                </div>
                            </div>
                            <div className='container-nt'>
                                <figure className='item__nav-top item__nav-top--plant'>
                                    <h4>Plantas</h4>
                                    <img alt='img-categories-nav' className='img__nav-top' src={plant} />
                                    <span className={`more-option ${moreInfo.plant ? 'move' : ''}`}
                                        onClick={() => more("plant")}
                                    >
                                        <ion-icon name="add"></ion-icon>
                                    </span>
                                </figure>
                                <div className={`more-info__nt ${moreInfo.plant ? 'open-more-info' : ''}`}>
                                    <p>Mesas</p>
                                    <p>Decoracion</p>
                                    <p>Alceda</p>
                                </div>
                            </div>
                            <div className='container-nt'>
                                <figure className='item__nav-top'>
                                    <h4>Lamparas</h4>
                                    <img alt='img-categories-nav' src={lightning} className='img__nav-top-light' />
                                    <span className={`more-option ${moreInfo.lightning ? 'move' : ''}`}
                                        onClick={() => more("lightning")}
                                    >
                                        <ion-icon name="add"></ion-icon>
                                    </span>
                                </figure>
                                <div className={`more-info__nt ${moreInfo.lightning ? 'open-more-info' : ''}`}>
                                    <p>Mesas</p>
                                    <p>Decoracion</p>
                                    <p>Alceda</p>
                                </div>
                            </div>
                        </div>
                        <span className='close__nav-top'
                            onClick={open}
                        >
                            <ion-icon name="chevron-up"></ion-icon>
                        </span>
                    </nav>
                </div>
                <figure className='logo'
                    onClick={handleClick}
                >
                    <img src={logo} className='img__logo' alt='logo-company' />
                    <h4>Bet<span>Ecommerce</span></h4>
                </figure>
                <div className="header__item">
                    <span>
                        <ion-icon name="bag-handle-sharp"></ion-icon>
                    </span>
                    <div className='infor-shop'>
                        <h3>5</h3>
                        <p>productos</p>
                    </div>
                </div>
            </div >
        </header >
    )
}
