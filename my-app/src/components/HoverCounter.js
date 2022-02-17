import withCounter from './HOC/withCounter';

function ClickCounter(props) {
    const { count, handleChange } = props;
    return (
        <div>
            <h1 onMouseOver={handleChange}>Hovered {count} times</h1>
        </div>
    );
}

export default withCounter(ClickCounter);
