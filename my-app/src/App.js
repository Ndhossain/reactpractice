import Calculator from './components/Calculator';
import Clocklist from './components/Clocklist';
import Emoji from './components/Emoji';
import Form from './components/Form';
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
            <div>
                <Emoji>{({ addEmoji }) => <Text addEmoji={addEmoji} />}</Emoji>
            </div>
        </>
    );
}

export default App;
