import React, { Component } from 'react';
import "./css/Project1.css";

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    increment = () => {
        this.setState({count: this.state.count + 1})
    }

    decrement = () => {
        this.setState({count: this.state.count - 1})
    }

    render() {
        return (
            <div className='simpleCounter'>
                <button onClick={this.decrement} className='counter'>-</button>
                <h2>{this.state.count}</h2>
                <button onClick={this.increment} className='counter'>+</button>
            </div>
        )
    }
}

export default Counter;