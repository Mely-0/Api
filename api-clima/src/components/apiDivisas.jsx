import React, { useState, useEffect } from 'react';
import './css/style.css';

export const ApiDivisas=() =>{
  let myHeaders = new Headers();
  const [resultado,setResultado]= useState(0);
  const handleSubmit=(e)=>{
   e.preventDefault();
  
   const moneda1= e.target.monedaUno.value;
   const moneda2= e.target.monedaDos.value;
   const monto= e.target.monto.value;

   console.log(moneda1)
   console.log(moneda2)
   console.log(monto)
   var myHeaders = new Headers();
            myHeaders.append("apikey", "6SWrIpIgmI7VmEeqv6T9IyBgcsFNAd66");
            fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${moneda2}&from=${moneda1}&amount=${monto}`,{
                method: 'GET',
                redirect: 'follow',
                headers: myHeaders
            })
            .then(response => response.json())
            .then(result => setResultado(result.result))
            .catch(error => console.log('error', error));
             
          } 

    return (
      <div className="background">
    
      <form className="conta" onSubmit={handleSubmit}>
        <div className="selects-container">
          <select className='moneda1'
            name="monedaUno"
            id="moneda-1"
            
            >
              <option value='COP'>COP</option>
              <option value='USD'>USD</option>
              <option value='EUR'>EUR</option>
              <option value='JPY'>JPY</option>
              <option value='AUD'>AUD</option>
              <option value='CNH'>CNH</option>
              <option value='HKD'>HKD</option>
              <option value='NZD'>NZD</option>

              
            
          </select>
          <select className='moneda2'
            name="monedaDos"
            id="moneda-2"
            
          >
              <option value='COP'>COP</option>
              <option value='USD'>USD</option>
              <option value='EUR'>EUR</option>
              <option value='JPY'>JPY</option>
              <option value='AUD'>AUD</option>
              <option value='CNH'>CNH</option>
              <option value='HKD'>HKD</option>
              <option value='NZD'>NZD</option>
           
          </select>
        </div>
        <div className="inputs-container">
          <input
            className=""
            type="text"
            name='monto'
            
           
          />
           <input 
           type="text"
           name='user' 
           className='input-field-2'
           onChange={(e)=>{
            setResultado(e.target.value)
        }

           }
           
          value={resultado}
          
          />        
          </div>
        <div>
          <button className='btn' type='submit'>Convertir</button>
        </div>
      </form>
    </div>
  );
}