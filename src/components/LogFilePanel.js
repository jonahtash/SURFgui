import React from 'react';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';

class LogFilePanel extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			enabled: true,
		}
		this.onChange = this.onChange.bind(this)
	}
	onChange(e) {
		this.setState({enabled:e.target.checked})
	}

	render () {
		return (
			<div>
				<Checkbox checked={this.state.enabled} onChange={this.onChange} className="log-check"/>
				<TextField disabled={!this.state.enabled} id="log-file" label="Log file" value="log.txt" margin="normal" className="log-input" />
			</div>
		);
	}
}

export default LogFilePanel;
