import React from 'react'
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Grow from '@material-ui/core/Grow';

class NavigationPanel extends React.Component {
	render () {
		return (
			<Paper className="nav-panel-paper">
				<Grow in={this.props.hasPrev}>
					<Button color="primary" onClick={this.props.prevStep} className="button-back">Back</Button>
				</Grow>
				<Grow in={this.props.hasNext}>
					<Button color="primary" variant="contained" onClick={this.props.nextStep} className="button-next">Continue</Button>
				</Grow>
			</Paper>
	);
	}
}

export default NavigationPanel;
