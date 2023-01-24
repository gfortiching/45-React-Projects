import React, {useState} from 'react';
import "./css/Project2.css";

const Temperature = () => {
    
    const [temperatureValue, setTemperatureValue] = useState(35);
    const [temperatureColor, setTemperatureColor] = useState("neutral");

    const increaseTemperature = () => {
        if(temperatureValue === 100) return; 

        const newTemperature = temperatureValue + 1;

        if(newTemperature >= 41) {
            setTemperatureColor('hot');
        } 

        if (newTemperature === 25) {
            setTemperatureColor('neutral');
        }
        
        setTemperatureValue(newTemperature)
    }

    const decreaseTemperature = () => {
        if(temperatureValue === -5) return; 

        const newTemperature = temperatureValue - 1;

        if(newTemperature <= 24) {
            setTemperatureColor('cold');
        } 
        
        if (newTemperature === 40) {
            setTemperatureColor('neutral');
        }
        
        setTemperatureValue(newTemperature)
    }

    return (
        <section className="temperature-body">
        <div className='app-container'>
            <div className="temperature-display-container">
                <div className={`temperature-display ${temperatureColor}`}>{temperatureValue}°C</div>
            </div>
            <div className="button-container">
                <button onClick={()=> decreaseTemperature()}>-</button>
                <button onClick={()=> increaseTemperature()}>+</button>
            </div>
        </div>
        </section>
    )
}

export default Temperature;