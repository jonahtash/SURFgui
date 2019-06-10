import React from 'react';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';

import RunPanel from './RunPanel';
import NavigationPanel from './NavigationPanel';
import LogFilePanel from './LogFilePanel';

class FormRunProgram extends React.Component {
	render () {
		return (
			<div className="run-wrapper">
				<Paper className="run-paper-outer">
					<LogFilePanel />
					<RunPanel />
					<Fab variant="extended" aria-label="Run" className="run-button" >Run Program</Fab>
				</Paper>
				<NavigationPanel prevStep={this.props.prevStep} nextStep={this.props.nextStep} hasNext={false} hasPrev={true} />
			</div>
		);
	}
}

export default FormRunProgram;
