import React from 'react';

const name = 'World';
// eslint-disable-next-line react/prefer-stateless-function
class Clock extends React.Component {
    state = { date: new Date(), locale: 'bn-Bd' };

    componentDidMount() {
        // eslint-disable-next-line react/no-unused-class-component-methods
        this.ClockTimer = setInterval(() => {
            this.tick();
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.ClockTimer);
    }

    // eslint-disable-next-line react/sort-comp
    tick() {
        this.setState({ date: new Date() });
    }

    // eslint-disable-next-line class-methods-use-this
    handleclick = () => {
        this.setState({
            locale: 'en-US',
        });
    };

    render() {
        const { date, locale } = this.state;
        return (
            <div>
                <h1 className="text">
                    <span>Hello {name}</span>
                    <br />
                    <span>The time is {date.toLocaleTimeString(locale)}</span>
                </h1>
                <button type="button" onClick={this.handleclick}>
                    Click Here
                </button>
            </div>
        );
    }
}

export default Clock;
