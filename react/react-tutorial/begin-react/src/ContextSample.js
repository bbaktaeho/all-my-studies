import React, { createContext, useContext } from 'react';

const MyContext = createContext('defaultValue');

function Child() {
    const text = useContext(MyContext);
    return <div>hi {text}</div>;
}

function Parent() {
    return <Child></Child>;
}

function ContextSample() {
    return (
        <MyContext.Provider value="good">
            <Parent></Parent>
        </MyContext.Provider>
    );
}

export default ContextSample;
