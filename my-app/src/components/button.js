import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class Button extends React.Component {
    // shouldComponentUpdate(nextprops) {
    //     const { change: currentChange } = this.props;
    //     const { change: nextChange } = nextprops;
    //     if (currentChange === nextChange) {
    //         return false;
    //     }
    //     return true;
    // }

    render() {
        const { change, text } = this.props;
        return (
            <button type="button" onClick={change}>
                {text}
            </button>
        );
    }
}

export default Button;
