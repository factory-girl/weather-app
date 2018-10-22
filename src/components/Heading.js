import React from 'react';

class Heading extends React.Component {

    render() {
        return(
        <div>
            <h1>5 Day Forecast {
                this.props.city && this.props.countryCode && `for ${this.props.city}, ${this.props.countryCode}`
            }
            </h1>
            { this.props.city === '' && this.props.countryCode === '' &&
                <p>Input a city and country code to see the 5 day forecast</p>
            }
        </div>
        )
    }
}

export default Heading;
