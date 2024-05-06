import React from 'react'

const WeatherCondition = ({data}) => {
    console.log(data)
 switch(data){
    case "Cloudy": return <div><b>Whether is Cloudy</b></div>
    case "Sunny": return <div>Whether is Sunny</div>
    case "Rainy": return <div>Whether is Rainy</div>
    case "Cold": return <div>Whether is Cold</div>
 }
}

export default WeatherCondition