import React from 'react';

function ShowCount({ count, title }) {
    console.log(`${title} rendered`);
    return (
        <h3>
            {title} is {count}
        </h3>
    );
}

export default React.memo(ShowCount);
