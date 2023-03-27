import { useState } from 'react';
import './mobile.css'
export function ButtomNavigation({ handleClick }) {
  const [buttonStates, setButtonStates] = useState([
    { upMove: false, clicked: true },
    { upMove: false, clicked: false },
    { upMove: false, clicked: false },
    { upMove: false, clicked: false },
  ]);

  const animateElement = (index) => {
    if (index === 0) {
      handleClick()
    }
    const newStates = buttonStates.map((buttonState, i) => ({
      upMove: i === index ? !buttonState.upMove : '',
      clicked: i === index ? true : false,
    }));
    setButtonStates(newStates);
  };

  const buttons = [
    { icon: 'home-sharp' },
    { icon: 'heart-sharp' },
    { icon: 'search' },
    { icon: 'settings-sharp' },
  ];

  return (
    <section className="buttom-navigation">
      <div className="container">
        {buttons.map((button, index) => (
          <button
            key={index}
            className={`item__bn 
            ${button.icon === 'heart-sharp' && buttonStates[index].clicked ? 'favorite' : ''}
             ${buttonStates[index].upMove || buttonStates[index].clicked ? 'item__bn-modifier' : ''}`}
            onClick={() => animateElement(index)}
          >
            <ion-icon name={button.icon}></ion-icon>
          </button>
        ))}
        <button className={`item__bn dark-mode`}>
          <ion-icon name="moon-sharp"></ion-icon>
        </button>
      </div>
    </section>
  );
}

export default ButtomNavigation;