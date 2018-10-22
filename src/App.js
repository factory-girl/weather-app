import React, { Component } from 'react';
import Weather from './components/Weather';
import Inputs from './components/Inputs';
import Heading from './components/Heading';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { city: '',
            countryCode: '',
            error: '',
            days: {
                day1:  {
                    temp: '',
                    text: '',
                    date: ''
                },
                day2:  {
                    temp: '',
                    text: '',
                    date: ''
                },
                day3:  {
                    temp: '',
                    text: '',
                    date: ''
                },
                day4:  {
                    temp: '',
                    text: '',
                    date: ''
                },
                day5:  {
                    temp: '',
                    text: '',
                    date: ''
                }
            }
        };
    }

    getWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const countryCode = e.target.elements.countryCode.value;

        getData(`https://api.openweathermap.org/data/2.5/forecast?q=${city},${countryCode}&APPID=4e3e0ad761bcd972a15d1e7379347bf1`)
            .then(response => {
                response = JSON.parse(response);
                    this.setState({
                        city: response.city.name,
                        countryCode: response.city.country,
                        days: {
                            day1:  {
                                temp: Math.floor(response.list[0].main.temp - 273.15),
                                text: response.list[0].weather[0].description,
                                date: response.list[0].dt_txt
                            },
                            day2:  {
                                temp: Math.floor(response.list[8].main.temp - 273.15),
                                text: response.list[8].weather[0].description,
                                date: response.list[8].dt_txt
                            },
                            day3:  {
                                temp: Math.floor(response.list[16].main.temp - 273.15),
                                text: response.list[16].weather[0].description,
                                date: response.list[16].dt_txt
                            },
                            day4:  {
                                temp: Math.floor(response.list[24].main.temp - 273.15),
                                text: response.list[24].weather[0].description,
                                date: response.list[24].dt_txt
                            },
                            day5:  {
                                temp: Math.floor(response.list[32].main.temp - 273.15),
                                text: response.list[32].weather[0].description,
                                date: response.list[32].dt_txt
                            }
                        }

                    });
            }, error => {
                this.setState({ error: error });
            })
    };

  render() {
    return (
        <div className="main-container">
            <Heading city={this.state.city}
                countryCode={this.state.countryCode}
            />
            <Inputs getWeather={this.getWeather} />
            <Weather city={this.state.city}
                countryCode={this.state.countryCode}
                days={this.state.days}
            />
        </div>
    );
  }
}

function getData(url) {
    return new Promise(function(resolve, reject) {
        const request = new XMLHttpRequest();
        request.open('GET', url);

        request.onload = function() {
            if (request.status === 200) {
                resolve(request.response);
            }
            else {
                reject(Error(request.statusText));
            }
        };

        request.onerror = function() {
            reject(Error("error"));
        };

        request.send();
    });
}

export default App;
