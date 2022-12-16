import React from "react"
import { useState } from "react"
import WeatherForm from "./weatherForm"

const WeatherApp = () => {
  const [weather, setWeather] = useState(null)
  async function loadInfo(city = "london") {
    try {
      const request = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=124a68c571ab4de7bed44803221612&q=${city}&aqi=no`
      )
      const json = await request.json()
      setWeather(json)
      console.log(json)
    } catch (error) {
      console.log(error)
    }
  }

  function handleChangeCity(city) {
    setWeather(null)
    loadInfo()
  }
  return (
    <div>
      <WeatherForm onChangeCity={handleChangeCity} />
      <div>{weather?.current.temp_c}</div>
    </div>
  )
}

export default WeatherApp
