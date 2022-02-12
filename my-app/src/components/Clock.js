import React from 'react';

const name = 'World';
// eslint-disable-next-line react/prefer-stateless-function
class Clock extends React.Component {
    state = { date: new Date() };

    componentDidMount() {
        // eslint-disable-next-line react/no-unused-class-component-methods
        this.ClockTimer = setInterval(() => {
            this.tick();
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.ClockTimer);
    }

    tick() {
        this.setState({ date: new Date() });
    }

    render() {
        const proper = this.props;
        const newDate = this.state;
        return (
            <h1 className="text">
                <span>Hello {name}</span>
                <br />
                <span>The time is {newDate.date.toLocaleTimeString(proper.locale)}</span>
            </h1>
        );
    }
}

export default Clock;
