import React from "react";
const images = require.context('../styling/images', true);

class Weather extends React.Component{

    render(){
        const days = this.props.days;

        return(
            <div>
                <ul>
                    { this.props.days.day0.temp && Object.values(days).map((day, index) => {
                        let img_src = images(`./${day.text}.svg`);
                            return <li key={ index }>
                                        <img src={img_src} alt="clear"/>
                                        {day.date}, {day.temp}°C, {day.text}
                                    </li>;
                    })
                    }
                </ul>
            </div>
        )
    }
}

export default Weather;