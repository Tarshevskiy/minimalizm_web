import React, {Component} from "react";
import Info from "./Info";
import Form from "./Form";
import Weather from "./Weather";
import {addInfoWeather} from '../database/state'
import '../Styles/FirstPageStyles.css'

const API_KEY = "3e02398e9bdef52437909809e9e1e601";

class FirstPage extends Component {
  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    pressure: undefined,
    sunset: undefined,
    error: undefined,
  };

  gettingWeather = async (e) => {
    e.preventDefault(); //убираем рефреш страницы с помощью ивента
    var city = e.target.elements.city.value;

    if (city) {
      const api_url = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await api_url.json();

      var date = new Date(data.sys.sunset * 1000);
      var hours = date.getHours(); 
      var minutes = "0" + date.getMinutes(); 
      var seconds = "0" + date.getSeconds();

      var sunset_date =
        hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);

      this.setState({
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        pressure: data.main.pressure,
        sunset: sunset_date,
        error: undefined,
      });
    } else {
      this.setState({
        temp: undefined,
        city: undefined,
        country: undefined,
        pressure: undefined,
        sunset: undefined,
        error: "Input city name",
      });
    }
    addInfoWeather(this.state)
    // console.log('state', )
  };

  render() {
    return (
      <div className="wrapper">
        <div className="main">
          <div className="container">
            <div className="row">
              <div className="col-5 info">
                <Info />
              </div>
              <div className="col-7 form">
                <Form weatherMethod={this.gettingWeather} />
                <Weather
                  temp={this.state.temp}
                  city={this.state.city}
                  country={this.state.country}
                  pressure={this.state.pressure}
                  sunset={this.state.sunset}
                  error={this.state.error}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FirstPage;
