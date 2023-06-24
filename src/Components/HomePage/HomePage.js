import React, { useState } from 'react';
import './HomePage.css';

import topLeftImage from '../../Images/images.jpeg';
import axios from 'axios';
import Loader from '../Loader/Loader';
import DisplayWeather from '../DisplayWeather/DisplayWeather';

const HomePage = () => {
    const [userLocation, setUserLocation] = useState(null);
    const [weatherInfo, setWeatherInfo] = useState(null);
    const [loading, setLoading] = useState(false);

    let id = 0;

    const API_KEY = "e48522bcd06f4619a0ba10521936c62a";
    const API_URL = `https://api.weatherbit.io/v2.0/forecast/daily?city=${userLocation},BD&key=${API_KEY}`;

    const handleChange = (e) => {
        setUserLocation(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            setLoading(true);

            await axios.get(API_URL)
            .then(response => {
                const capitalData = response.data;
                setWeatherInfo(capitalData);
            })

            setLoading(false);

        }catch(error){
            setLoading(false);
        }
    }

    let content = null;
    if(loading) content = <Loader />;
    if(!loading && weatherInfo?.length === 0) content = <div className='errorText'>"No Related Data Found!"</div>;
    if(!loading && weatherInfo?.length != 0) content = <DisplayWeather weatherInfo={weatherInfo} />


    return (
        <div className='homePageArea'>
            <div className='topArea'>
                <div className='topLeft'>
                    <img src={topLeftImage} alt="topLeftImage" />
                </div>
                <div className='topRight'>
                    <h3>Weather Forecast App</h3>
                    <form onSubmit={handleSubmit}>
                        <input onChange={handleChange} type='text' name='location' placeholder='Search Your Location...' required />
                        <button>Search</button>
                    </form>
                </div>
            </div>
            <div className='displayArea'>
                {content}
            </div>
        </div>
    );
};

export default HomePage;