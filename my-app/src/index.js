// eslint-disable-next-line no-unused-vars
import React from 'react';
import ReactDOM from 'react-dom';

// eslint-disable-next-line no-unused-vars

// const name = 'World';
// class Clock extends React.PureComponent {
//     render() {
//         return (
//             <h1 className="text">
//                 <span>Hello {name}</span>
//                 <br />
//                 <span>The time is {new Date().toLocaleTimeString(this.props.locale)}</span>
//             </h1>
//         );
//     }
// }

// const element = <Clock locale="bn-BD" />;

// ReactDom.render(element, document.getElementById('root'));

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

ReactDOM.render(<Clock />, document.getElementById('root'));
