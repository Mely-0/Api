import React from 'react'
import { useState } from 'react'
import './css/weather.css'
import {MdSearch } from "react-icons/md";
export const WeatherForms = ({newLocation}) => {
    const [city , setCity]=useState("");


    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log({city})
        if(city === '' || !city)return;
        newLocation(city);
        e.target.city.value = ""
}


    return (
        <div className=" card-body">
        <form className='formulario' onSubmit={handleSubmit} >
            <div className="form-group">
                <input type="text" name="city" placeholder="Your City Name" className="form-control"  onChange={(e)=>
                    setCity(e.target.value)
                }

                    />
            <button className="btn-block" type='submit' >
            <MdSearch className='icono'/>
            </button>
            </div>
        </form>
        
    </div>
    )
}
