import React from 'react';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';

class LogFilePanel extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			enabled: true,
			value: 'log.txt',
		}
		this.onChange = this.onChange.bind(this)
	}
	onChange(e) {
		this.setState({enabled:e.target.checked})
	}
	getValue() {
		return (this.state.value);
	}
	textChanged(e) {
		this.setState({value:e.target.value});
	}
	render () {
		return (
			<div>
				<Checkbox checked={this.state.enabled} onChange={this.onChange} className="log-check"/>
					<TextField value={this.state.value} disabled={!this.state.enabled} onChange={this.textChanged} id="log-file" label="Log file" margin="normal" className="log-input" />
			</div>
		);
	}
}

export default LogFilePanel;
