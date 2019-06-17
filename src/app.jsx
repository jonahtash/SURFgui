import React from 'react';
import Papa from 'papaparse';
import fs from 'fs';

import DenseAppBar from './components/DenseAppBar';
import FormSelectProgram from './components/FormSelectProgram';
import FormConfigProgram from './components/FormConfigProgram';
import FormRunProgram from './components/FormRunProgram';
import ConfigSelectDialog from './components/ConfigSelectDialog';
import ConfigSaveDialog from './components/ConfigSaveDialog';

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			step: 1,
			selectedProgram: null,
			params: null,
			log: '',
			programs: [],
			configs: [],
			loadDialogOpen: false,
			saveDialogOpen: false,
			selectedConfig: null,
			existing: false,
			stdout: '',
			stderr: '',
		};
		//refs
		this.selectProgramForm = React.createRef();
		this.configProgramForm = React.createRef();
		this.saveDialog = React.createRef();
		this.runForm = React.createRef();

		//binding functions
		this.nextStep = this.nextStep.bind(this);
		this.prevStep = this.prevStep.bind(this);
		this.loadPrograms = this.loadPrograms.bind(this);
		this.addProgram = this.addProgram.bind(this);
		this.onProgramSelect = this.onProgramSelect.bind(this);
		this.loadConfigs = this.loadConfigs.bind(this);
		this.addConfig = this.addConfig.bind(this);
		this.onConfigLoad = this.onConfigLoad.bind(this);
		this.onConfigSave = this.onConfigSave.bind(this);
		this.handleListItemClick = this.handleListItemClick.bind(this);
		this.handleLoadClose = this.handleLoadClose.bind(this);
		this.closeSave = this.closeSave.bind(this);
		this.saveConfig = this.saveConfig.bind(this);
		this.updateExistingConfig = this.updateExistingConfig.bind(this);
		this.updateParam = this.updateParam.bind(this);
		this.runProgram = this.runProgram.bind(this);
		this.onEnd = this.onEnd.bind(this);
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

	addConfig(result) {
		this.setState({ configs : this.state.configs.concat(result.data)});
		if (result.data.id == "default") {
			this.setState({selectedConfig : result.data, existing: true});
			//this.configProgramForm.current.setConfig(result.data);
		}
	}

	loadConfigs(prog) {
		Papa.parse('../config/programs/' +prog.prog_id+'.csv',
			{
				delimiter: ', ',
				header:true,
				download: true,
				quoteChar: '"',
				newline: "\r\n",
				step: this.addConfig,
			}
		);
	}

	onConfigLoad(){
		this.setState({loadDialogOpen: true});
	}

	onConfigSave() {
		this.setState({saveDialogOpen: true});
	}
	closeSave() {
		this.setState({saveDialogOpen: false});
		if (this.state.existing) {
			this.saveDialog.current.setToUpdate();
		}
	}
	saveConfig(id, label, desc){
		console.log(id, label, desc);
		this.closeSave();
	}
	onProgramSelect(prog) {
		this.setState({selectedProgram : prog, configs: []});
		this.selectProgramForm.current.setState({isSelected:true});
		//this.loadConfigs(prog);
	}
	handleLoadClose() {
		this.setState({loadDialogOpen: false});
	}
	handleListItemClick(conf) {
		this.setState({selectedConfig : conf, existing: true});
		this.state.selectedProgram.prog_params.forEach(function(param){
			param["value"] = conf[param.id]
		});
		this.saveDialog.current.setToUpdate();
		this.configProgramForm.current.setConfig(conf);
		this.handleLoadClose();
	}
	updateExistingConfig() {
		console.log("TODO");
	}
	updateParam(value, p){
		this.state.selectedProgram.prog_params.forEach(function(param){
			if (param == p) {
				param["value"] = value
			}
			});
	}
	runProgram() {
		let bindings = {};
		let wrap = require('../wrappers/'+this.state.selectedProgram.wrapper_id+'/wrapper.js').default;
		this.state.selectedProgram.prog_params.forEach(function(param){
			bindings[param.id] = param.value;
		});
		this.runForm.current.setLoading(true);
		let results = wrap(JSON.parse(this.state.selectedProgram.wrapper_conf.replace(/'/g, '"')), bindings, this.runForm.current.outUpdate, this.runForm.current.errUpdate, this.onEnd);
	}
	onEnd() {
		this.runForm.current.detachOut();
		this.runForm.current.setLoading(false);
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
			view = <FormConfigProgram ref = {this.configProgramForm} prevStep = {this.prevStep} nextStep={this.nextStep} handleChange={this.handleChange}
				program={this.state.selectedProgram} loadConfig={this.onConfigLoad} saveConfig={this.onConfigSave} updateParam={this.updateParam}/>
		}
		if (this.state.step == 3) {
			view = <FormRunProgram  ref={this.runForm} prevStep = {this.prevStep} nextStep={this.nextStep} runProgram={this.runProgram} stdout={this.state.stdout} stderr={this.state.stderr}/>
		}

    return (
			<div>
				{DenseAppBar()}
				<div className="back">
					{view}
					<ConfigSelectDialog onClose={this.handleLoadClose} handleListItemClick={this.handleListItemClick} configs={this.state.configs} open={this.state.loadDialogOpen}/>
					<ConfigSaveDialog ref={this.saveDialog} onClose={this.handleSaveClose} open={this.state.saveDialogOpen}
						confLabel={this.state.selectedConfig ? this.state.selectedConfig.label : ''} existing={this.state.existing}
						handleClose={this.closeSave} saveConfig={this.saveConfig} updateExisting={this.updateExistingConfig}/>
				</div>
			</div>
		);
  }

}
