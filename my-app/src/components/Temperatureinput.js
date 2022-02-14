import React from 'react';

const scaleNames = {
    c: 'Celsius',
    f: 'fahrenheit',
};

// eslint-disable-next-line react/prefer-stateless-function
export default function TemperatureInput({ scale, temperature, handleTemperature }) {
    return (
        <fieldset>
            <legend>Enter temperature in {scaleNames[scale]}</legend>
            <input type="text" value={temperature} onChange={(e) => handleTemperature(e, scale)} />
        </fieldset>
    );
}
