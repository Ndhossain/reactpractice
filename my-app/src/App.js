import Clocklist from './components/Clocklist';

function App() {
    const quantity = [1, 2, 3];
    return (
        <div>
            <Clocklist quantity={quantity} />
        </div>
    );
}

export default App;
