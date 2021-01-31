import React from 'react';

const Counter = (props) => {



    // decrementScore = () => {
    //     this.setState(prevState => ({
    //         score: prevState.score - 1
    //     }));
    // }
    let index = props.index;

    return (
        <div className="counter">
            <button className="counter-action decrement" onClick={() => props.changeScore(index, -1)}> - </button>
            <span className="counter-score">{props.score}</span>
            <button className="counter-action increment" onClick={() => props.changeScore(index, 1)}> + </button>
        </div>
    );
}

export default Counter;