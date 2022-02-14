import React from 'react';
import { convert, toCelsius, tofahrenheit } from '../lib/Converter';
import BoilingVerdict from './BoilingVerdict';
import TemperatureInput from './Temperatureinput';

export default class Calculator extends React.Component {
    state = {
        scale: '',
        temperature: '',
    };

    handleChange = (e, scale) => {
        this.setState({
            temperature: e.target.value,
            scale,
        });
    };

    render() {
        const { temperature, scale } = this.state;
        const celsius = scale === 'f' ? convert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? convert(temperature, tofahrenheit) : temperature;
        return (
            <div>
                <TemperatureInput
                    scale="c"
                    temperature={celsius}
                    handleTemperature={this.handleChange}
                />
                <TemperatureInput
                    scale="f"
                    temperature={fahrenheit}
                    handleTemperature={this.handleChange}
                />
                <BoilingVerdict celsius={parseFloat(temperature)} />
            </div>
        );
    }
}
