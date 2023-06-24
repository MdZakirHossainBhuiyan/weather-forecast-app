import React from 'react';
import './DisplayWeather.css';

const DisplayWeather = ({weatherInfo}) => {
    const {city_name, country_code, data, timezone} = weatherInfo;
    const {app_min_temp, weather, high_temp, low_temp, clouds} = data[0];
    const iconCode = data[0].weather.icon;
    console.log("iconCode", iconCode);
    
    return (
        <div className='displayCard'>
            <h5>{city_name}, {country_code}</h5>
            <div className='currentWeather'>
                <div>
                    {/* <img src={`https://openweathermap.org/img/wn/${weather?.icon}.png`} /> */}
                    
                    <p><i className={`wi wi-owm-${iconCode}`}></i>{weather?.description}</p>
                </div>
                <div className='currentTem'>
                    <p>{app_min_temp}&deg;C</p>
                </div>
                <div>
                    Date: 
                    Time Zone: {timezone} <br />
                    High Temp: {high_temp}&deg;C <br/>
                    Low Temp: {low_temp}&deg;C <br/>
                    Clouds: {clouds}% <br/>
                </div>
            </div>
            <div className='forecastWeather'>
                <p>{data[1]?.app_min_temp}&deg;C</p> <br />
                <p>{data[2]?.app_min_temp}&deg;C</p> <br />
                <p>{data[3]?.app_min_temp}&deg;C</p> <br />
                <p>{data[4]?.app_min_temp}&deg;C</p> <br />
                <p>{data[5]?.app_min_temp}&deg;C</p> <br />
                <p>{data[6]?.app_min_temp}&deg;C</p> <br />
                <p>{data[7]?.app_min_temp}&deg;C</p> <br />
            </div>
        </div>
    );
};

export default DisplayWeather;