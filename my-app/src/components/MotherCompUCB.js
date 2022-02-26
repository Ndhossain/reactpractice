import { useCallback, useMemo, useState } from 'react';
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

    const evenOrOdd = useMemo(() => {
        console.log(count1);
        let i = 0;
        while (i < 1000000000) i += 1;
        return count1 % 2 === 0 ? 'Even' : 'odd';
    }, [count1]);

    return (
        <div>
            <Title />
            <ShowCount count={count1} title="Counter 1" />
            <span>{evenOrOdd}</span>
            <br />
            <br />
            <IncrementButton handleChange={incremntByOne}>Incremnt by one</IncrementButton>
            <hr />
            <ShowCount count={count2} title="Counter 2" />
            <IncrementButton handleChange={incremntByFive}>Incremnt by five</IncrementButton>
        </div>
    );
}
