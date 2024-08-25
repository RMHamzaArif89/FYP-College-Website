import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import './cardsMarquee.css';

const cards = [
  { id: 1, heading: 'Card 1', buttonText: 'Learn More' },
  { id: 2, heading: 'Card 2', buttonText: 'Learn More' },
  { id: 3, heading: 'Card 3', buttonText: 'Learn More' },
  { id: 4, heading: 'Card 4', buttonText: 'Learn More' },
  { id: 5, heading: 'Card 5', buttonText: 'Learn More' },
  // Add more cards as needed
];

const CardsMarquee = () => {
  const [isPaused, setIsPaused] = useState(false);

  // Marquee animation
  const props = useSpring({
    from: { transform: 'translateX(0%)' },
    to: { transform: `translateX(-100%)` },
    config: { duration: 10000 }, // Adjust the duration to control speed
    reset: true,
    loop: true,
    pause: isPaused, // Use the pause property
  });

  const handleMouseEnter = () => {
    setIsPaused(true); // Set paused to true
  };

  const handleMouseLeave = () => {
    setIsPaused(false); // Resume the animation by setting paused to false
  };


  return (
    <div className="cardsMarquee-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <animated.div className="cardsMarquee" style={props}>
        {cards.map((card) => (
          <div className="cardMarquee" key={card.id}>
            <h3>{card.heading}</h3>
            <button>{card.buttonText}</button>
          </div>
        ))}
        {cards.map((card) => (
          <div className="cardMarquee" key={`clone-${card.id}`}>
            <h3>{card.heading}</h3>
            <button>{card.buttonText}</button>
          </div>
        ))}
      </animated.div>
    </div>
  );
};

export default CardsMarquee;
