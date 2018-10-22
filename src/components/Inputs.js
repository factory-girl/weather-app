import React from "react";

class Inputs extends React.Component{

    render(){

        return(
            <form onSubmit = {this.props.getWeather}>
                <div>
                    <input type="text" name="city" placeholder="City"/>
                    <input type="text" name="countryCode" placeholder="Country code"/>
                    <button>See forecast</button>
                </div>
            </form>

        )
    }
}

export default Inputs;