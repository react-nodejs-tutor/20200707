import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeColor } from '../store/modules/counter';
import ColorSquare from '../components/ColorSquare';

class ColorSquareContainer extends Component {
	render() {
		const { number, changeColor, color } = this.props;

		return <ColorSquare number={number} changeColor={changeColor} selected={color} />;
	}
}

const mapStateToProps = (state) => ({
	number: state.counter.number,
	color: state.counter.color,
});

const mapDispatchToProps = (dispatch) => ({
	changeColor: (color) => dispatch(changeColor(color)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ColorSquareContainer);
