import React from 'react';
import ReactDom from 'react-dom';

// eslint-disable-next-line no-unused-vars

const name = 'World';
// eslint-disable-next-line react/prefer-stateless-function
class Clock extends React.Component {
    render() {
        const proper = this.props;
        return (
            <h1 className="text">
                <span>Hello {name}</span>
                <br />
                <span>The time is {new Date().toLocaleTimeString(proper.locale)}</span>
            </h1>
        );
    }
}

const element = <Clock locale="bn-BD" />;

ReactDom.render(element, document.getElementById('root'));
