import React from 'react'
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import ParameterPanel from './ParameterPanel';
import NavigationPanel from './NavigationPanel';
import FlagsButtonPanel from './FlagsButtonPanel';

class FormConfigProgram extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			formCompleted: false,
		}
		this.paramPanel = React.createRef();
		this.checkCompletion = this.checkCompletion.bind(this);
		this.onParameterChange = this.onParameterChange.bind(this);
		this.setConfig = this.setConfig.bind(this);
	}

	onParameterChange(value, p) {
		let refs = this.paramPanel.current.getInputs();
		let completed = true;
		this.props.updateParam(value, p);
		this.props.program.prog_params.forEach(function(param){
			if(param.direction!="flag") {
				if (param == p){
					completed = (value.length > 0) && completed;
				} else {
						completed = (refs[param.id].current.getValue().length > 0) && completed;
				}
			}
		});
		this.setState({formCompleted: completed});
	}
	checkCompletion() {
		let refs = this.paramPanel.current.getInputs();
		let completed = true;
		this.props.program.prog_params.forEach(function(param){
			if(param.direction!="flag") {
				completed = (refs[param.id].current.getValue().length > 0) && completed;
			}
		});
		this.setState({formCompleted: completed});
	}
	setConfig(config) {
		let refs = this.paramPanel.current.getInputs();
		this.props.program.prog_params.forEach(function(param){
			refs[param.id].current.setValue(config[param.id]);
		});
	}
	componentDidMount() {
		this.checkCompletion();
	}
	render () {
		return(
			<div className="config-wrapper">
				<Box component="div">
						<div>
							<Paper className="config-program-paper" style={{overflow: 'auto'}}>
								<div className="param-text-div">
									<Typography variant="h4">
											{this.props.program.prog_label + " Parameters"}
									</Typography>
								</div>
								<ParameterPanel ref={this.paramPanel} program={this.props.program} handleChange={this.onParameterChange}/>
								<FlagsButtonPanel configFlags={this.props.configFlags}/>
							</Paper>
						</div>
				</Box>
				<footer>
					<Box component="div" className="foot-div">
						<NavigationPanel prevStep={this.props.prevStep} nextStep={this.props.nextStep} hasNext={this.state.formCompleted} hasPrev={true} />
					</Box>
				</footer>
			</div>
			);
	}
}

export default FormConfigProgram;
