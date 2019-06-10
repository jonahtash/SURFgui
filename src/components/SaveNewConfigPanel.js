import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

class SaveNewConfigPanel extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			id: '',
			label: '',
			desc: '',
		}
		this.idChange = this.idChange.bind(this);
		this.labelChange = this.labelChange.bind(this);
		this.descChange = this.descChange.bind(this);
	}
	idChange(e) {
		this.setState({id: e.target.value});
	}
	labelChange(e) {
		this.setState({label: e.target.value});
	}
	descChange(e) {
		this.setState({desc: e.target.value});
	}
	render () {
		return (
			<div>
				<DialogContent>
						<TextField id="conf-id" value={this.state.id} label="Configuration ID" onChange={this.idChange} helperText='Variable-like identifier i.e "test_data_set"' margin="dense" fullWidth />
						<TextField id="conf-label" value={this.state.label} label="Label" onChange={this.labelChange} margin="normal" className="conf-input" />
						<TextField id="conf-desc" value={this.state.desc} multiline label="Description" onChange={this.descChange} margin="normal" className="conf-input" />
				</DialogContent>
				<DialogActions>
					<Button onClick={this.props.handleClose} color="primary">Cancel</Button>
					<Button onClick={() => this.props.saveConfig(this.state.id, this.state.label, this.state.desc)} variant="contained" color="primary">Save</Button>
				</DialogActions>
			</div>
		);
	}
}

export default SaveNewConfigPanel;
