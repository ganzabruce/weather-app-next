"use client"
import { useState } from 'react';
import { fetchWeather } from './api/fetchWeather';
import Footer from './components/footer';


export default function Home() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
  const [info , setInfo] = useState("")
  console.log(weather)
  const search = async (e) => {
      if(e.key === 'Enter') {
          const data = await fetchWeather(query);
          setWeather(data);
          setQuery('');
          setInfo("")
      }
  }
    const getWeather = async () =>{
        if(query === ""){
            setInfo("please search for a city")
        }
        const data = await fetchWeather(query);
          setWeather(data);
          setQuery('');
          setInfo("")
    }
  return (
    <div className="main-container">
        <div className="search-box">
            <input type="text" className="search" placeholder="Search a City Name" value={query} onChange={(e) => setQuery(e.target.value)} onKeyPress={search}/>
            <button className="my-btn" onClick={getWeather}><i className='fas fa-search'></i></button>
        </div>
        {info && <div>{info}</div>}
        {weather.location && (
            <div className="city">
                <h2 className="city-name">
                    <span>{weather.location.name}</span>
                    <sup>{weather.location.country}</sup>
                </h2>
                <div className="city-temp">
                    {Math.round(weather.current.temp_c)}
                    <sup>&deg;C</sup>
                </div>
                <div className="info">
                    <img className="city-icon" src={weather.current.condition.icon} alt={weather.current.condition.text} />
                    <p>{weather.current.condition.text}</p>
                </div>
            </div>
        )}
        <footer>
          <Footer />
        </footer>
    </div>
  );
}
