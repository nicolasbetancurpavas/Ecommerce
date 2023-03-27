import React, { useContext } from 'react'
import { Header } from '../Header/Header'
import ButtomNavigation from '../ButtomNav/ButtomNavigation'
import { Offer } from '../Offer/Offer'
import { Categories } from '../Categories/Categories'
import { GrennSection } from '../GreenSection/GrennSection'
import { Advertising } from '../Advertising/Advertising'
import { globalApp } from '../Context/Context'


export const AppUi = () => {
    const { handleClick } = useContext(globalApp)
    return (
        <div className='mode'>
            <Header
                handleClick={handleClick}
            />
            <ButtomNavigation
                handleClick={handleClick}
            />
            <Offer />
            <Categories />
            <Advertising />
            <GrennSection />
        </div>
    )
}
