import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import './app.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWind, faCloud, faCalendarDay, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';


class App extends Component {

  render() {

    const API = {

      key: 'ad5074ba6a2d554164114bed4973ad4d',
      base: 'https://api.openweathermap.org/data/2.5'

    }

    return(

      <React.Fragment>
        <Container>
          <h1 className='app-main-heading text-center p-5'>Weather App</h1>
          <div className='form w-100 text-center mb-5'>
            <input className='findLocation text-center' type='text' placeholder='where we go now?' />
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
                <span>28.10.2021</span>
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
}

export default App;