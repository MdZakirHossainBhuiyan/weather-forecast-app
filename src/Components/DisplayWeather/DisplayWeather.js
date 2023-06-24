import React from 'react';
import './DisplayWeather.css';
import ForecastUpdate from '../ForecastUpdate/ForecastUpdate';

const DisplayWeather = ({weatherInfo}) => {
    const {city_name, country_code, data, timezone} = weatherInfo;
    const {app_min_temp, weather, high_temp, low_temp, clouds, datetime} = data[0];
    const iconCode = data[0]?.weather?.icon;

    const count = 0;
    
    return (
        <div className='displayCard'>
            <h5>{city_name}, {country_code}</h5>
            <div className='currentWeather'>
                <div>
                    <img src={`https://openweathermap.org/img/wn/02d.png`} />
                    
                    <p><i className={`wi wi-owm-${iconCode}`}></i>{weather?.description}</p>
                </div>
                <div className='currentTem'>
                    <p>{app_min_temp}&deg;C</p>
                </div>
                <div>
                    Date: {datetime} <br />
                    Time Zone: {timezone} <br />
                    High Temp: {high_temp}&deg;C <br/>
                    Low Temp: {low_temp}&deg;C <br/>
                    Clouds: {clouds}% <br/>
                </div>
            </div>
            <div className='forecastWeather'>
                {
                    data.slice(0, 6).map((forecastData) => <ForecastUpdate forecastData={forecastData} />)
                }
            </div>
        </div>
    );
};

export default DisplayWeather;