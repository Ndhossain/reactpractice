import Clocklist from './components/Clocklist';
import Form from './components/Form';
import Calculator from './components/Calculator';

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
        </>
    );
}

export default App;
