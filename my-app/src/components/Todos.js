import { useState } from 'react';

export default function Todo() {
    const [todo, setTodo] = useState('');
    const [warning, setWarning] = useState(null);

    const handleInput = (e) => {
        const inputValue = e.target.value;
        const updatedWarning = inputValue.includes('.js')
            ? 'You need JavaScript skill to complete the task. Do you have it?'
            : null;
        setTodo(inputValue);
        setWarning(updatedWarning);
    };

    return (
        <div>
            <p>{todo}</p>
            <p>
                <textarea name="todo" value={todo} onChange={handleInput} />
            </p>
            <hr />
            <p>{warning || 'Good choice!'}</p>
        </div>
    );
}
