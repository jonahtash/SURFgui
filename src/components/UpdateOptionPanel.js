import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Button from '@material-ui/core/Button';

class UpdateOptionPanel extends React.Component {
	render () {
		return (
			<div>
				<DialogContent>
					<DialogContentText>
						Update existing configuration "{this.props.confLabel}, " or create new?
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={this.props.newConfig} color="primary">
						New
					</Button>
					<Button onClick={this.props.updateExisting} variant="contained" color="primary">
						Update existing
					</Button>
				</DialogActions>
			</div>
		);
	}
}

export default UpdateOptionPanel;
