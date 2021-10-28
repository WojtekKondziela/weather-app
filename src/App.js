import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import './app.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWind, faCloud, faCalendarDay, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const API = {

  key: 'ad5074ba6a2d554164114bed4973ad4d',
  base: 'https://api.openweathermap.org/data/2.5/',
  units: 'metric'

}

function App() {

    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({})

    const search = evt => {

      if(evt.key === "Enter") {

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

    return(

      <React.Fragment>
        <Container>
          <h1 className='app-main-heading text-center p-5'>Weather App</h1>
          <div className='form w-100 text-center mb-5'>
            <input className='findLocation text-center' type='text' placeholder='where we go now?' onChange={e => setQuery(e.target.value)} value={query} onKeyPress={search} />
          </div>
          <div className='weather-table pt-5'>
            <div className='temp item-1'>
              <span className='weather-table__item p-3'>17&deg;C</span>
            </div>
            <div className='city item-2'>
              <span className='weather-table__item p-3'>
                <FontAwesomeIcon icon={faMapMarkerAlt} className='mx-3 icon' />
                <span>Ustroń</span>
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
                <FontAwesomeIcon icon={faCloud} className='mx-3 icon' />
                <span>cloudy</span>
              </span>
            </div>
            <div className='wind item-5'>
              <span className='weather-table__item p-3'>
                <FontAwesomeIcon icon={faWind} className='mx-3 icon' />
                <span>5 m/s</span>
              </span>
            </div>
          </div>
        </Container>
      </React.Fragment>

    )

  }

export default App;