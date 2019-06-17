import React from 'react';
import Box from '@material-ui/core/Box';

import ParameterInput from './ParameterInput'

class FlagPanel extends React.Component {

	constructor(props) {
		super(props);

		this.makeInputs = this.makeInputs.bind(this);
		this.refs = {};
		this.props.program.prog_params.map(param => this.refs[param.id] = React.createRef());
		this.state = {
			inputs: null,
			refs: this.refs,
		};
		this.getInputs = this.getInputs.bind(this);
		this.makeInputs();


	}

	makeInputs() {
		let paramInputs = []
		this.props.program.prog_params.forEach((param) => {
			if (param.direction =='flag') {
				paramInputs.push(<ParameterInput ref={this.refs[param.id]} key={param.id} parameter={param} handleChange={this.props.handleChange}/>);
			}
		});

		this.state = {
			inputs: paramInputs,
			refs: this.refs,
		};
	}
	getInputs() {
		return (this.state.refs);
	}

	render () {
		return (
			<Box component="div" style={{textAlign:"center"}}>
				{this.state.inputs}
			</Box>
		)
	}
}

export default FlagPanel;
