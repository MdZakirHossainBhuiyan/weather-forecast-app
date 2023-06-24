import React from 'react';
import './ForecastUpdate.css';

const ForecastUpdate = ({forecastData}) => {
    const iconCode = forecastData?.weather?.icon.substring(1)

    return (
        <div className='forecastBody'>
            <img src={`https://openweathermap.org/img/wn/${iconCode}.png`} />
            <p>{forecastData?.app_min_temp}&deg;C</p>
        </div>
    );
};

export default ForecastUpdate;