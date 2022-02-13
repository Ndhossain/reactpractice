import React from 'react';
import Button from './button';

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
        const { locale } = this.state;
        // eslint-disable-next-line no-unused-expressions
        locale === 'bn-Bd'
            ? this.setState({
                  locale: 'en-US',
              })
            : this.setState({
                  locale: 'bn-Bd',
              });
    };

    render() {
        const { date, locale } = this.state;
        let buttonText;
        // eslint-disable-next-line no-unused-expressions
        locale === 'bn-Bd' ? (buttonText = 'ঘড়ি বদলান') : (buttonText = 'Change the clock');
        return (
            <div>
                <h1 className="text">
                    <span>Hello {name}</span>
                    <br />
                    <span>The time is {date.toLocaleTimeString(locale)}</span>
                </h1>
                <Button change={this.handleclick} text={buttonText} />
            </div>
        );
    }
}

export default Clock;
