import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import './cardsMarquee.css';
import departmentData from '../../Pages/DepartmentPage/depertment';



const CardsMarquee = () => {
  const [isPaused, setIsPaused] = useState(false);

  // Marquee animation
  const props = useSpring({
    from: { transform: 'translateX(0%)' },
    to: { transform: `translateX(-275%)` },
    config: { duration: 20000 }, // Adjust the duration to control speed
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
        {departmentData.map((data) => (
          <div className="cardMarquee" key={data.id}>
            <h1>{data.name}</h1>
            <h2>Department</h2>
            {/* <button>{data}</button> */}
          </div>
        ))}
        {departmentData.map((data) => (
          <div className="cardMarquee" key={`clone-${data.id}`}>
            <h1>{data.heading}</h1>
            <h2>Department</h2>
            {/* <button>{data}</button> */}
          </div>
        ))}
      </animated.div>
    </div>
  );
};

export default CardsMarquee;
