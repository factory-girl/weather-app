import React from "react";
import rain from "../styling/images/rain.svg";
import clouds from "../styling/images/clouds.svg";
import clear from "../styling/images/clear.svg";

class Weather extends React.Component{

    render(){
        const days = this.props.days;

        return(
            <div>
                <ul>
                    { this.props.days.day1.temp && Object.values(days).map((day, index) => {
                        if (day.text.includes("rain")) {
                            return <li key={ index }>
                                <img src={rain} alt="rain"/>
                                {day.date}, {day.temp}°C, {day.text}
                            </li>;
                        } else if (day.text.includes("clear")) {
                            return <li key={ index }>
                                <img src={clear} alt="clear"/>
                                {day.date}, {day.temp}°C, {day.text}
                            </li>;
                        } else {
                            return <li key={ index }>
                                <img src={clouds} alt="clouds"/>
                                {day.date}, {day.temp}°C, {day.text}
                            </li>;
                        }

                    })
                    }
                </ul>
            </div>
        )
    }
}

export default Weather;