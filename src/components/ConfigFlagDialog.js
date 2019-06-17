import React from 'react'
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Button from '@material-ui/core/Button';

import FlagPanel from './FlagPanel';

class ConfigFlagDialog extends React.Component {
	constructor(props) {
		super(props);
		this.flagPanel = React.createRef();
		this.handleSaveClick = this.handleSaveClick.bind(this);
	}
	handleSaveClick() {
		this.props.updateFlags(this.flagPanel.current.getInputs());
	}
	render () {
		if (this.props.flags.length == 0) {
			return (
				<Dialog onClose={this.props.handleClose} open={this.props.open} aria-labelledby="flag-dialog">
	      	<DialogTitle id="simple-dialog-title">No Program Flags Found</DialogTitle>
						<DialogContent>
							<DialogContentText>
								The selected program does not have any configurable flags.
							</DialogContentText>
						</DialogContent>
						<DialogActions>
							<Button onClick={this.props.handleClose} color="primary">
								Ok
							</Button>
						</DialogActions>
				</Dialog>
			);
		}
		return (
			<Dialog onClose={this.props.handleClose} open={this.props.open} aria-labelledby="flag-dialog">
      	<DialogTitle id="simple-dialog-title">Configure Program Flags</DialogTitle>
					<DialogContent>
						<DialogContentText>
							Modifying flags can result in unintended consequences. Please alter with care.
						</DialogContentText>
						<FlagPanel ref={this.flagPanel} program={this.props.program} handleChange={this.props.flagChanged}/>
					</DialogContent>
					<DialogActions>
						<Button onClick={this.props.handleClose} color="primary">
							Cancel
						</Button>
						<Button onClick={this.handleSaveClick} color="primary" variant="contained">
							Save
						</Button>
					</DialogActions>

			</Dialog>
		);
	}
}

export default ConfigFlagDialog;
