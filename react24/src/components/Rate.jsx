import React from 'react'; 
import './Rate.css'; 

const Rate = ({name, price, speed, color, selected, onClick}) => { 
    const cardClass = `rate-card ${color}-card`
  return( 
    <div className={"rate-card "+(selected ? " selected" : "") } onClick={onClick}> 
        <div className={cardClass}> 
        <div className="rate-name">{name}</div> 
        <p> <sup> <span>руб</span></sup> {price} <sub><span>/мес</span></sub></p>
        <div className="rate-speed">{speed}</div> 
        <div className='rate-info'> 
            Объём включенного <br/>
            трафика не ограничен
            </div>
            </div> 

    </div> 
  ) 
} 
 
export default Rate;