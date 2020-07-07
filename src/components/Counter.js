import React, { Component } from 'react';
import './Counter.css';

class Counter extends Component {
	render() {
		const { number, increment, decrement } = this.props;

		return (
			<div className="Counter">
				<h1>{number}</h1>
				<div className="btn-wrapper">
					<button onClick={increment}>+</button>
					<button onClick={decrement}>-</button>
				</div>
			</div>
		);
	}
}

export default Counter;
