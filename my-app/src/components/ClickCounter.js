import withCounter from './HOC/withCounter';

function ClickCounter(props) {
    const { count, handleChange } = props;
    return (
        <div>
            <button type="button" onClick={handleChange}>
                Clicked {count} times
            </button>
        </div>
    );
}

export default withCounter(ClickCounter);
