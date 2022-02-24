import { useState } from 'react';
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
import MotherCompUCB from './components/MotherCompUCB';

function App() {
    const quantity = [1, 2, 3];
    const [show, setShow] = useState(true);
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
                <div>{show && <MyComponent />}</div>
                <br />
                <br />
                <button type="button" onClick={() => setShow((prevShow) => !prevShow)}>
                    {show ? 'Hide post' : 'Show post'}
                </button>
            </div>
            <br />
            <div>
                <MotherCompUCB />
            </div>
        </>
    );
}

export default App;
