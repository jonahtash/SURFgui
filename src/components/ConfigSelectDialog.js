import React from 'react'
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';

import ConfigList from './ConfigList';

class ConfigSelectDialog extends React.Component {
	render () {
		return (
			<Dialog onClose={this.props.handleClose} open={this.props.open} aria-labelledby="config-dialog">
      	<DialogTitle id="simple-dialog-title">Select Control Configuration</DialogTitle>
				<ConfigList configs={this.props.configs} handleListItemClick={this.props.handleListItemClick}/>
			</Dialog>
		);
	}
}

export default ConfigSelectDialog;
