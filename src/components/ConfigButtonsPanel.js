import React from 'react'
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

class ConfigButtonsPanel extends React.Component {
	render () {
		return (
			<Paper className="config-buttons-panel">
				<Button variant="contained" color="secondary"className="load-button" onClick={this.props.loadConfig}>Load</Button>
				<Button variant="contained" color="secondary"className="save-button" onClick={this.props.saveConfig}>Save</Button>
			</Paper>
		);
	}
}

export default ConfigButtonsPanel;
