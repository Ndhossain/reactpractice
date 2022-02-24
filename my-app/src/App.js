import Calculator from './components/Calculator';
import ClickCounter from './components/ClickCounter';
import Clocklist from './components/Clocklist';
import Counter from './components/Counter';
import Emoji from './components/Emoji';
import Form from './components/Form';
import HoverCounter from './components/HoverCounter';
import MyComponent from './components/MyComponent';
import Text from './components/Text';
import Todo from './components/Todos';

function App() {
    const quantity = [1, 2, 3];
    return (
        <>
            <div>
                <Clocklist quantity={quantity} />
            </div>
            <br />
            <div>
                <Form />
            </div>
            <br />
            <div>
                <Calculator />
            </div>
            <br />
            <div>
                <Emoji>{({ addEmoji }) => <Text addEmoji={addEmoji} />}</Emoji>
            </div>
            <br />
            <div>
                <Counter>
                    {(count, handleChange) => (
                        <ClickCounter count={count} handleChange={handleChange} />
                    )}
                </Counter>
            </div>
            <br />
            <div>
                <Counter>
                    {(count, handleChange) => (
                        <HoverCounter count={count} handleChange={handleChange} />
                    )}
                </Counter>
            </div>
            <br />
            <div>
                <Todo />
            </div>
            <br />
            <div>
                <MyComponent />
            </div>
        </>
    );
}

export default App;
