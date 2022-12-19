import React from 'react'
import { Spinner } from './spinner'
import './css/card.css'
export const Card = ({ weather , showData , loadingData}) => {
    let today = new Date();
    let day = today.getDate();
    let month= today.getMonth();
    let year = today.getFullYear();
    let fecha= `${day} / 12 / ${year}`;
    let url = '';
    let iconoUrl= '';
    if (loadingData) {
        return <Spinner/>
    }
    if (showData){
        url= 'http://openweathermap.org/img/w/';
        iconoUrl = url + weather.weather[0].icon  + '.png'
    }
    return (
    
    <div className='contenedor-card'>
    {
        showData === true ? (
            <div className='card'>
                    <div className='imagen-text' >
                        <div className='imagen'>
                            <div className='inf-1'>
                            <h1 className='name-city'>{weather.name}</h1>
                            <h1 className='name-city'>{fecha}</h1>
                            </div>
                            <div className='inf-2'>
                            <h1 className='name'>{(weather.main.temp - 273.15).toFixed(1)}°C</h1>
                            <h1 className='name'>
                            <div className='temperatura'>
                            {weather.weather[0].description} 
                            <img src={iconoUrl}/>
                            </div>
                            </h1>
                            </div>
                        </div>

                        <div className='informacion'>   
                        <div className='texto'>
                        <h1 className='name-city'>Temperatura maxima: {(weather.main.temp_max - 273.15).toFixed(1)}°C</h1>
                        <h1 className='name-city'>Temperatura minima:      {(weather.main.temp_min - 273.15).toFixed(1)}°C</h1>
                        <h1 className='name-city'>Sensacion termica:  {(weather.main.feels_like - 273.15).toFixed(1)}°C</h1>
                        <h1 className='name-city'>Humedad:  {weather.main.humidity}%</h1>
                        </div>
                        </div>
                    </div>
                </div>
            

        ):(
            <h2 className='text'> sin datos</h2>
        )
    }
    </div>

    )
    }

    