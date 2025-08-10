import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const API_KEY = "YOUR_OPENWEATHERMAP_API_KEY"; 

const WeatherDetails = () => {
  const { city } = useParams();
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );
        const data = await res.json();
        setWeather(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    fetchWeather();
  }, [city]);

  if (loading) return <p style={{ textAlign: "center" }}>Loading...</p>;
  if (!weather || weather.cod !== 200)
    return <p style={{ textAlign: "center" }}>City not found!</p>;

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Weather in {weather.name}</h2>
      <p>Temperature: {weather.main.temp}°C</p>
      <p>Humidity: {weather.main.humidity}%</p>
      <p>Condition: {weather.weather[0].description}</p>

      <iframe
        title="map"
        width="600"
        height="450"
        style={{ border: 0, marginTop: "20px" }}
        loading="lazy"
        allowFullScreen
        src={`https://www.google.com/maps/embed/v1/place?q=${weather.name}&key=YOUR_GOOGLE_MAPS_API_KEY`}
      ></iframe>
    </div>
  );
};

export default WeatherDetails;
