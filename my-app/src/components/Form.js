import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
export default class Form extends React.Component {
    state = {
        title: '',
        text: '',
        library: 'React',
        isAwesome: true,
    };

    handleChange = (e) => {
        if (e.target.type === 'text') {
            this.setState({
                title: e.target.value,
            });
        } else if (e.target.type === 'textarea') {
            this.setState({
                text: e.target.value,
            });
        } else if (e.target.type === 'select-one') {
            this.setState({
                library: e.target.value,
            });
        } else if (e.target.type === 'checkbox') {
            this.setState({
                isAwesome: e.target.checked,
            });
        } else {
            console.log('');
        }
    };

    submitHandler = (e) => {
        e.preventDefault();
        const { title, text, library, isAwesome } = this.state;
        console.log(title, text, library, isAwesome);
    };

    render() {
        const { title, text, library, isAwesome } = this.state;
        return (
            <form onSubmit={this.submitHandler}>
                <input
                    type="text"
                    placeholder="Write here"
                    value={title}
                    onChange={this.handleChange}
                />
                <br />
                <br />
                <textarea
                    name="text"
                    placeholder="Write here"
                    value={text}
                    onChange={this.handleChange}
                />
                <br />
                <br />
                <select placeholder="Select Here" value={library} onChange={this.handleChange}>
                    <option value="React">React</option>
                    <option value="Angular">Angular</option>
                    <option value="Vue">Vue</option>
                </select>
                <br />
                <br />
                <input type="checkbox" checked={isAwesome} onChange={this.handleChange} />
                <br />
                <br />
                <input type="submit" value="submit" />
            </form>
        );
    }
}
