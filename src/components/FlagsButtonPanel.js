import React from 'react'
import IconButton from '@material-ui/core/IconButton';
import SvgIcon from '@material-ui/core/SvgIcon';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

class FlagsButtonPanel extends React.Component {
	render () {
		return (
			<Paper className="config-buttons-panel">
				<Button variant="contained" color="secondary"className="load-button" onClick={this.props.loadConfig}>Load</Button>
				<IconButton aria-label="flags" onClick={this.props.configFlags} className="flags-button">
					<SvgIcon>
						<path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z" />
					</SvgIcon>
				</IconButton>
			</Paper>
		);
	}
}

export default FlagsButtonPanel;
