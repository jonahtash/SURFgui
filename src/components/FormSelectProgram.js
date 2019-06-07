import React from 'react'
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grow from '@material-ui/core/Grow';

import ProgramList from './ProgramList';
import SelectedPanel from './SelectedPanel'

class FormSelectProgram extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isSelected: false,
		}
	}
	render () {
		return(
			<Box component="div">
				<Paper className = "prog-list-paper-outer">
					<div className="select-text-div">
						<Typography variant="h4">
								Select a Program
						</Typography>
					</div>
					<div className = "prog-list-div">
						<ProgramList programs={this.props.programs} onProgramSelect = {this.props.onProgramSelect}/>
					</div>
				</Paper>
				<Grow in={this.state.isSelected}>
					<div>
					<SelectedPanel program={this.props.selectedProgram} nextStep={this.props.nextStep}/>
					</div>
				</Grow>
			</Box>
			);
	}
}

export default FormSelectProgram;
