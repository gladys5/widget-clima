import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import WeatherForm from "./weatherForm"
import WeatherMainInfo from "./weatherMainInfo"
import Loading from "./loading"

const WeatherApp = () => {
  const [weather, setWeather] = useState(null)
  useEffect(() => {
    loadInfo()
  }, [])
  if (loadInfo === undefined) {
    return
  }
  useEffect(() => {
    document.title = `Weather || ${weather?.location.name ?? ""}`
  }, [weather])
  async function loadInfo(city = "london") {
    try {
      const request = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=124a68c571ab4de7bed44803221612&q=${city}&aqi=no`
      )
      const json = await request.json()
      setTimeout(() => {
        setWeather(json)
      }, 2000)
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
      <h1>Widget del clima</h1>
      <WeatherForm onChangeCity={handleChangeCity} />

      {weather ? <WeatherMainInfo weather={weather} /> : <Loading />}
    </div>
  )
}

export default WeatherApp
