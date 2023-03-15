import React from 'react';

class Question9Class extends React.Component {
    render() {
        const handleClick = () => {
            alert("Hello world")
        }
        return <>
            <button onClick={() => handleClick()} > click me </button>
        </>
    }
}

function Question9Function(){
    const handleClick = () => {
        alert("Hello world")
    }
    return (
        <div>
            <button onClick={() => handleClick()} > click me </button>
        </div>
    );
};


export {Question9Class , Question9Function}