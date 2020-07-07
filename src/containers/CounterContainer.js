import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../store/modules/counter';
import Counter from '../components/Counter';

class CounterContainer extends Component {
	render() {
		const { number, increment, decrement } = this.props;

		return <Counter number={number} increment={increment} decrement={decrement} />;
	}
}

const mapStateToProps = (state) => ({
	number: state.counter.number,
});

const mapDispatchToProps = (dispatch) => ({
	increment: () => dispatch(increment()),
	decrement: () => dispatch(decrement()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
