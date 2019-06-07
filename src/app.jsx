import React from 'react';
import Papa from 'papaparse';
import fs from 'fs';

import DenseAppBar from './components/DenseAppBar';
import FormSelectProgram from './components/FormSelectProgram';
import FormConfigProgram from './components/FormConfigProgram';

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			step: 1,
			selectedProgram: null,
			params: null,
			log: '',
			programs: [],
		};
		//refs
		this.selectProgramForm = React.createRef();

		this.nextStep = this.nextStep.bind(this);
		this.prevStep = this.prevStep.bind(this);
		this.loadPrograms = this.loadPrograms.bind(this);
		this.addProgram = this.addProgram.bind(this);
		this.onProgramSelect = this.onProgramSelect.bind(this);
		this.loadPrograms();
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

	addProgram(result) {
		if (result.data.prog_params) {
			result.data.prog_params = JSON.parse(result.data.prog_params.replace(/'/g, '"'))
		}
		//result.data.prog_params = JSON.parse(result.prog_params);
		this.setState({ programs : this.state.programs.concat(result.data)});
	}

	loadPrograms() {
		Papa.parse('../config/programs.csv',
			{
				delimiter: '@',
				header:true,
				download: true,
				quoteChar: '"',
				newline: "\n",
				step: this.addProgram,
			}
		);
	}

	onProgramSelect(prog) {
		this.setState({selectedProgram : prog});
		this.selectProgramForm.current.setState({isSelected:true});
	}

	render() {
		let view;
		// Load in .csv with programs

		// Render correct view based on state step
		if (this.state.step == 1) {
			view = <FormSelectProgram ref={this.selectProgramForm} nextStep = {this.nextStep} handleChange={this.handleChange} programs={this.state.programs}
				selectedProgram={this.state.selectedProgram} onProgramSelect={this.onProgramSelect}/>
		}
		if(this.state.step == 2) {
			view = <FormConfigProgram prevStep = {this.prevStep} handleChange={this.handleChange} program={this.state.selectedProgram}/>
		}

    return (
			<div>
				{DenseAppBar()}
				<div className="back">
					{view}
				</div>
			</div>
		);
  }

}
