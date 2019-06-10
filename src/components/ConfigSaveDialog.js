import React from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';

import SaveNewConfigPanel from './SaveNewConfigPanel';
import UpdateOptionPanel from './UpdateOptionPanel';

class ConfigSaveDialog extends React.Component {
	constructor(props){
		super(props);
		if (this.props.existing) {
			this.setNew();
		} else {
			this.setToUpdate();
		}
		this.state = {
			view: null,
		}
		this.setNew = this.setNew.bind(this);
		this.setToUpdate = this.setToUpdate.bind(this);
	}
	setNew() {
		let view = <SaveNewConfigPanel handleClose={this.props.handleClose} saveConfig={this.props.saveConfig}/>
		this.setState({view: view});
	}
	setToUpdate() {
		let view = <UpdateOptionPanel confLabel={this.props.confLabel} updateExisting={this.props.updateExsting} newConfig={this.setNew}/>
		this.setState({view: view});
	}
	render () {
		return (
			<Dialog onClose={this.props.handleSaveClose} open={this.props.open} aria-labelledby="config-dialog">
      	<DialogTitle id="simple-dialog-title">Save Configuration</DialogTitle>
				{this.state.view}
			</Dialog>
		);
	}
}

export default ConfigSaveDialog;
