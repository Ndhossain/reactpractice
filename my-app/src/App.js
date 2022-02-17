import Calculator from './components/Calculator';
import ClickCounter from './components/ClickCounter';
import Clocklist from './components/Clocklist';
import Emoji from './components/Emoji';
import Form from './components/Form';
import HoverCounter from './components/HoverCounter';
import Text from './components/Text';

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
                <ClickCounter />
            </div>
            <br />
            <div>
                <HoverCounter />
            </div>
        </>
    );
}

export default App;
