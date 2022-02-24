import { useCallback, useState } from 'react';
import IncrementButton from './IncrementButton';
import ShowCount from './ShowCount';
import Title from './Title';

export default function MotherCompUCB() {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    const incremntByOne = useCallback(() => {
        setCount1((prevCount) => prevCount + 1);
    }, []);

    const incremntByFive = useCallback(() => {
        setCount2((prevCount) => prevCount + 5);
    }, []);

    return (
        <div>
            <Title />
            <ShowCount count={count1} title="Counter 1" />
            <IncrementButton handleChange={incremntByOne}>Incremnt by one</IncrementButton>
            <hr />
            <ShowCount count={count2} title="Counter 2" />
            <IncrementButton handleChange={incremntByFive}>Incremnt by five</IncrementButton>
        </div>
    );
}
