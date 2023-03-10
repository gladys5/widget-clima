import React from "react"
import { useState } from "react"

const WeatherForm = ({ onChangeCity }) => {
  const [city, setCity] = useState("")
  function onChange(e) {
    const value = e.target.value
    if (value !== "") {
      setCity(value)
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
    onChangeCity(city)
  }
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" onChange={onChange} />
      </form>
    </div>
  )
}

export default WeatherForm
