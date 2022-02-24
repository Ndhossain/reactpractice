import { useEffect, useState } from 'react';

export default function MyComponent() {
    const [count, setCount] = useState(0);
    // eslint-disable-next-line no-unused-vars
    const [time, setTime] = useState(new Date());

    const tick = () => {
        setTime(new Date());
    };

    useEffect(() => {
        console.log('ticking');
        setInterval(tick, 1000);

        return () => {
            console.log('hello i am on');
        };
    }, []);

    useEffect(() => {
        document.title = `Clicked ${count} times`;
    }, [count]);

    const addTitle = () => {
        setCount((prevCount) => prevCount + 1);
    };

    return (
        <div>
            <h1>Time is : {time.toLocaleTimeString()}</h1>
            <button type="button" onClick={addTitle}>
                Add 1
            </button>
        </div>
    );
}
