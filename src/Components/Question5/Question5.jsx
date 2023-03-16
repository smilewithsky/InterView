import React from 'react';

class Question5Class extends React.Component {
    render() {
        const handleClick = () => {
            alert("Hello world")
        }
        return <>
            <button onClick={() => handleClick()} > click me </button>
        </>
    }
}

function Question5Function(){
    const handleClick = () => {
        alert("Hello world")
    }
    return (
        <div>
            <button onClick={() => handleClick()} > click me </button>
        </div>
    );
};


export {Question5Class , Question5Function}