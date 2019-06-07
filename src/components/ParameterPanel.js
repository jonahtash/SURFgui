import React from 'react'
import Box from '@material-ui/core/Box';
import ParameterInput from './ParameterInput';

class ParameterPanel extends React.Component {

	constructor(props) {
		super(props);
		let paramInputs = this.props.program.prog_params.map(param =>
			<ParameterInput key={param.id} parameter={param} handleChange={this.change}/>
		);
		this.change = this.change.bind(this);
		this.state = {
			inputs: paramInputs
		};
		console.log("hi");
	}

	change(i) {
		let complete = true;
		/*for (input in this.state.inputs) {
			if (input.getValue().length < 1) {
				complete = false
			}
		}*/
		this.props.handleChange(complete);
	}

	render () {
		return (
			<Box component="div">
				{this.state.inputs}
			</Box>
		)
	}
}

export default ParameterPanel;
