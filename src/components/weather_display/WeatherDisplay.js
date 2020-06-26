import React, { Component } from "react";
import {Row, Col} from "react-bootstrap";

const API_KEY = "759973e30655ec914beccbf008d7b29a"

export default class CurrentWeather extends Component {
  constructor() {
    super();
    this.state = {
      weatherData: null
    };
  }

  componentDidMount() {
    console.log(this.props.zip);
    const zip = this.props.zip;
    const URL = `http://api.openweathermap.org/data/2.5/weather?id=${zip}` +
                `&appid=${API_KEY}&units=metric`;
    fetch(URL).then(res => res.json()).then(json => {
      this.setState({ weatherData: json });
    });
  }

  render() {
    if (this.state.weatherData == null) return <div>Loading</div>;
    const weatherData = this.state.weatherData;
    const weather = this.state.weatherData.weather[0];
    const iconUrl = "http://openweathermap.org/img/w/" + weather.icon + ".png";
    return (
      <Row>
        <Col>
            <div className="weather">
                <h3>{weather.main} in {weatherData.name}</h3>
                <div><img src={iconUrl} alt={weather.description}/></div>
                <div>Temperature: {weatherData.main.temp} °C</div>
                <div>Feels like: {weatherData.main.feels_like} °C</div>
                <div>Atmospheric pressure: {weatherData.main.pressure} hPa</div>
                <div>Humidity: {weatherData.main.humidity} %</div>
                <div>Wind speed: {weatherData.wind.speed} meter/sec</div>
                <div>Cloudiness: {weatherData.clouds.all} %</div>
            </div>
        </Col>
      </Row>
    );
  }
}