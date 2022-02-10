// eslint-disable-next-line no-unused-vars
import React from 'react';
import ReactDom from 'react-dom';

// eslint-disable-next-line no-unused-vars
const name = 'World';
const element = (
    <h1 className="text">
        <span>Hello {name}</span>
        <img src="" alt="" />
    </h1>
);

ReactDom.render(element, document.getElementById('root'));
