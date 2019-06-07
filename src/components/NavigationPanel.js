import React from 'react'
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

class NavigationPanel extends React.Component {
	render () {
		return (
			<Paper className="nav-panel-paper">
				<Button color="primary" onClick={this.props.prevStep}>Back</Button>
			</Paper>
	);
	}
}

export default NavigationPanel;
