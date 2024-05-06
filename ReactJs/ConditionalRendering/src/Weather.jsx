import React, { useState } from 'react'
import WeatherCondition from './WeatherCondition';

export const Weather = () => {
    let [wheather,setWeather]=useState("");
    let handleChange=(e)=>{
        let {innerText}=e.target;
        setWeather(innerText);
    }
    console.log(wheather)
  return (
    <div>
        <button onClick={handleChange}>Cloudy</button>
        <button onClick={handleChange}>Sunny</button>
        <button onClick={handleChange}>Rainy</button>
        <button onClick={handleChange}>Cold</button>
        <WeatherCondition data={wheather}/>
    </div>
  )
}
