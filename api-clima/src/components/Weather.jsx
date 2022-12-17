
import React from 'react'
import { WeatherForms} from './WeatherForms'
import { useState } from 'react'

export const Weather = () => {
    let urlWeather= 'https://api.openweathermap.org/data/2.5/weather?appid=7abcee26437860336d015fe38fe1e2a6&lang=es&q='
    //lang:Puede utilizar este parámetro para obtener la salida en su idioma. 
   
    let urlForeCast= 'https://api.openweathermap.org/data/2.5/forecast?appid=7abcee26437860336d015fe38fe1e2a6&lang=es&q='
    //para llamar por el nombre de la ciudad.
    const [weather , setWeather]=useState([])
    const [foreCast , setForeCast]=useState([])
    //almacenar respuesta que nos va a dar la api 
    const [loading , setLoading]= useState(false)
    //para que miestras se este cargando la informacion se pueda visualizar este spiner
    const [show, setShow]= useState(false)
    //visualizar la tarjeta con la informacion
    const [location , setLocation ]= useState('')
    //para que se pueda comunicar con la variables de estado 


    //LLAMADA A LA API
    const getLocation= async(loc)=>{
        setLoading (true); 
        setLocation (loc)
        /* https://api.openweathermap.org/data/2.5/forecast?appid=7abcee26437860336d015fe38fe1e2a6lang=es&q=cali

        https://api.openweathermap.org/data/2.5/weather?q=cali&appid=7abcee26437860336d015fe38fe1e2a6 */
        //llamada a weather
        urlWeather = urlWeather + loc;
        console.log(urlWeather);
        await fetch(urlWeather).then ((response)=>{
            if(!response.ok)throw  {response}
            return response.json();
            //vamos a procesar la informacion en un parametro weatherdata , obtendremos la informacion 
        }).then((weatherData)=>{
            //le ingresamos la informacion a setweather
            console.log(weatherData)
            setWeather(weatherData)
        }).catch(error=>{
            console.log(error);
            setLoading(false);
            setShow(false);
        })
    

        urlForeCast = urlForeCast + loc;
    await fetch (urlForeCast).then ((response)=>{
        if(!response.ok)throw  {response}
        return response.json();
        //vamos a procesar la informacion en un parametro weatherdata , obtendremos la informacion 
    }).then((foreCastData)=>{
        //le ingresamos la informacion a setweather
        console.log(foreCastData)
        setForeCast(foreCastData)
        setLoading(false)
        setShow(true);
    }).catch(error=>{
        console.log(error);
        setLoading(false);
        setShow(false);
    })
}
  return (
   <div>
    <WeatherForms
    newLocation= {getLocation}
    />
   </div>
  )
}
