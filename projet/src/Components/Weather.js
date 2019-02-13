import React from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";
import './Weather.css';




function getLocation() {
  return axios.get("https://ipapi.co/json/");
}

function getWeather(location) {

  let units = "&units=metric";
  let appid = "&APPID=e8656d00ae56fd09428db5cae581be02";
  
  return axios.get("https://api.openweathermap.org/data/2.5/weather?q=" + location + units + appid);
}

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      format: 'C',
      location: '',
      weather: '',
      temp: 0
    };
  }
  
  componentDidMount() { 
    let _this = this;
    
    getLocation().then(function(result) { 
        let loc = result.data.city + ', ' + result.data.country;
      
        getWeather(loc).then(function(result) {

          _this.setState({
            location: loc,
            weather: result.data.weather[0],
            temp: result.data.main.temp
          })

        });
    }).catch(
      
      _this.setState({
        location: 'Cannot get location.',
        temp: null
      })
      
    );
  }
  
  
  
  render() {
    let hr = (new Date).getHours()
    let tod = (hr >= 17) ? 'night' : 'day';
    
    return (
      <div className='container'>
        <h1>Local Weather</h1>
        <div className='location'>
          <h2>{this.state.location}</h2>
          <p>{this.state.weather.main}</p>
          <i className={'wi wi-owm-' + tod + '-' + this.state.weather.id}></i>
          {this.state.temp && 
            <p>{this.state.temp} &#176;{this.state.format}</p>
          }
          
        </div>
      </div>
    );
  }
}




export default Weather;