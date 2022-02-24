import React from 'react';

function IncrementButton({ handleChange, children }) {
    console.log(`button rendered`);
    return (
        <button type="button" onClick={handleChange}>
            {children}
        </button>
    );
}

export default React.memo(IncrementButton);
