import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import './app.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWind, faCalendarDay, faMapMarkerAlt, faTint } from '@fortawesome/free-solid-svg-icons';
import sunset from './assets/sunset.png';
import sunrise from './assets/sunrise.png';
import barometer from './assets/barometer.png';

const API = {

  key: 'ad5074ba6a2d554164114bed4973ad4d',
  base: 'https://api.openweathermap.org/data/2.5/',
  units: 'metric'

}

function App() {

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({})

  const search = e => {

    if (e.key === "Enter") {

      fetch(`${API.base}weather?q=${query}&units=${API.units}&APPID=${API.key}`)
        .then(res => res.json())
        .then(result => {

          setWeather(result)
          setQuery('')
          console.log(weather);

        });

    }

  }

  const getDate = (d) => {

    let date = d.getDate();
    let month = d.getMonth() + 1;
    let year = d.getFullYear();

    return `${date}.${month}.${year}`;

  }

  function convert_UNIX_to_date(unix) {

    let date = new Date(unix * 1000);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let formatedMinutes = (minutes < 10) ? `0${minutes}` : `${minutes}`;

    return `${hours}:${formatedMinutes}`;

  }

  return (

    <React.Fragment>
      <Container className='container'>
        <h1 className='app-main-heading text-center p-5'>Weather App</h1>
        <div className='form w-100 text-center mb-4 d-flex flex-column align-items-center'>
          <input className='findLocation text-center' type='text' placeholder='where we go now?' onChange={e => setQuery(e.target.value)} value={query} onKeyPress={search} />
          <small className='mt-3'>point of view: Poland</small>
        </div>
        {(typeof weather.main !== 'undefined') ? (

          <div className='weather-table pt-3'>
            <div className='temp item-1'>
              <span className='weather-table__item p-3'>
                <span className='actual_temp'>{Math.round(weather.main.temp)}&deg;C</span>
                <span className='temp_feels_like'>feels like {Math.round(weather.main.feels_like)}&deg;C</span>
              </span>
            </div>
            <div className='city item-2'>
              <span className='weather-table__item p-3'>
                <FontAwesomeIcon icon={faMapMarkerAlt} className='mx-3 icon' />
                <span>{weather.name} <sup className='country'>{weather.sys.country}</sup></span>
              </span>
            </div>
            <div className='date item-3'>
              <span className='weather-table__item p-3'>
                <FontAwesomeIcon icon={faCalendarDay} className='mx-3 icon' />
                <span>{getDate(new Date())}</span>
              </span>
            </div>
            <div className='weather-icon item-4'>
              <span className='weather-table__item p-3'>
                <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt={weather.weather[0].description} className='weather__img' />
                <span>{weather.weather[0].description}</span>
              </span>
            </div>
            <div className='wind item-5'>
              <span className='weather-table__item p-3'>
                <FontAwesomeIcon icon={faWind} className='mx-3 icon' />
                <span>{weather.wind.speed} m/s</span>
              </span>
            </div>
            <div className='sunrise item-6'>
              <span className='weather-table__item p-3'>
                <img src={sunrise} alt={weather.sys.sunrise} className='icon' />
                <span>{convert_UNIX_to_date(weather.sys.sunrise)}</span>
              </span>
            </div>
            <div className='pressure item-7'>
              <span className='weather-table__item p-3'>
                <img src={barometer} alt={weather.main.pressure} className='icon' />
                <span>{weather.main.pressure} hPa</span>
              </span>
            </div>
            <div className='humidity item-8'>
              <span className='weather-table__item p-3'>
                <FontAwesomeIcon icon={faTint} className='mx-3 icon' />
                <span>{weather.main.humidity} %</span>
              </span>
            </div>
            <div className='sunset item-9'>
              <span className='weather-table__item p-3'>
                <img src={sunset} alt={weather.sys.sunset} className='icon' />
                <span>{convert_UNIX_to_date(weather.sys.sunset)}</span>
              </span>
            </div>
          </div>

        ) : ( (weather.cod === "404") ? <div className='cityNotFound text-center'>City Not Found</div> : '' )
        }

      </Container>
    </React.Fragment>

  )

}

export default App;