import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import WeatherForm from "./weatherForm"
import WeatherMainInfo from "./weatherMainInfo"

const WeatherApp = () => {
  const [weather, setWeather] = useState(null)
  useEffect(() => {
    loadInfo()
  }, [])
  useEffect(() => {
    document.title = `Weather|${weather?.location.name ?? ""}`
  }, [weather])
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
    loadInfo(city)
  }
  return (
    <div>
      <WeatherForm onChangeCity={handleChangeCity} />
      <WeatherMainInfo weather={weather} />
    </div>
  )
}

export default WeatherApp
