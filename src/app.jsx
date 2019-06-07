import React from 'react';

import DenseAppBar from './components/DenseAppBar';

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			step: 1,
			program: null,
			params: null,
			log: '',
		};
		this.nextStep = this.nextStep.bind(this);
		this.prevStep = this.prevStep.bind(this);
	}
	nextStep() {
		this.setState({step: this.state.step+1});
	}
	prevStep() {
		this.setState({step: this.state.step-1});
	}
	handleChange(input, e){
		this.setState({[input]: e.target.value});
	}
	render() {
    return (
			<div>
				{DenseAppBar()}
				{switch (this.state.step) {
					case 1:
						<FormSelectProgram nextStep = {this.nextStep} handleChange={this.handleChange}/>
						break;
					case 2:
						<FormConfigProgram prevStep = {this.prevStep} handleChange={this.handleChange}/>
						break;
					}}
			</div>
		);
  }

}
