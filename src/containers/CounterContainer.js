import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../store/modules/counter';
//import * as CounterActions from '../store/modules/counter';

import Counter from '../components/Counter';

class CounterContainer extends Component {
	render() {
		const { number, increment, decrement, color } = this.props;

		return (
			<Counter
				number={number}
				increment={increment}
				decrement={decrement}
				color={color}
			/>
		);
	}
}

const mapStateToProps = (state) => ({
	number: state.counter.number,
	color: state.counter.color,
});

//const mapDispatchToProps = (dispatch) => ({
//	counterActions: bindActionCreators(CounterActions, dispatch),
//});

const mapDispatchToProps = {
	increment,
	decrement,
};

// bindActionCreators

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
