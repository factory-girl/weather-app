import React from 'react';
import Weather from './components/Weather';
import Inputs from './components/Inputs';
import Heading from './components/Heading';
import './styling/App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            city: '',
            countryCode: '',
            error: '',
            days: {
                day0: {
                    temp: '',
                    text: '',
                    date: ''
                },
                day1: {
                    temp: '',
                    text: '',
                    date: ''
                },
                day2: {
                    temp: '',
                    text: '',
                    date: ''
                },
                day3: {
                    temp: '',
                    text: '',
                    date: ''
                },
                day4: {
                    temp: '',
                    text: '',
                    date: ''
                }
            }
        }
    }

    getWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const countryCode = e.target.elements.countryCode.value;
        const request = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city},${countryCode}
        &units=metric&APPID=4e3e0ad761bcd972a15d1e7379347bf1`);
        const response = await request.json();

        if (response) {
            this.setState({
                city: response.city.name,
                countryCode: response.city.country,
                days: {
                    day0:  {
                        temp: Math.floor(response.list[0].main.temp),
                        text: response.list[0].weather[0].main,
                        date: response.list[0].dt_txt
                    },
                    day1:  {
                        temp: Math.floor(response.list[8].main.temp),
                        text: response.list[8].weather[0].main,
                        date: response.list[8].dt_txt
                    },
                    day2:  {
                        temp: Math.floor(response.list[16].main.temp),
                        text: response.list[16].weather[0].main,
                        date: response.list[16].dt_txt
                    },
                    day3:  {
                        temp: Math.floor(response.list[24].main.temp),
                        text: response.list[24].weather[0].main,
                        date: response.list[24].dt_txt
                    },
                    day4:  {
                        temp: Math.floor(response.list[32].main.temp),
                        text: response.list[32].weather[0].main,
                        date: response.list[32].dt_txt
                    }
                }

            });
        } else {
            this.setState({error: 'There was an error fetching the weather data'})
        }
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

export default App;
