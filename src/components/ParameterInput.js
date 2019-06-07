import React from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import SvgIcon from '@material-ui/core/SvgIcon';
const { dialog } = require('electron').remote

class ParameterInput extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: '',
		}
		this.loadFile = this.loadFile.bind(this);
		this.onChange = this.onChange.bind(this);
	}
	getValue() {
		return (this.state.value);
	}
	loadFile () {
		let path;
		path = dialog.showOpenDialog();
		if (path) {
			this.setState({value: path});
		} else {
				console.log("No file selected");
		}
	}
	onChange(e) {
		this.setState({value: e.target.value})
		this.props.handleChange(this);
	}
	render () {
		if (this.props.parameter.type == "string") {
			return (
				<TextField className="param-input" id={this.props.parameter.id} value={this.state.value} label={this.props.parameter.label } margin="normal" variant="outlined"/>
			);
		}
		if (this.props.parameter.type == "file") {
			return (
				<div>
					<TextField id={this.props.parameter.id}  value={this.state.value} label={this.props.parameter.label} margin="normal" variant="outlined" className="param-input" onChange={this.onChange}
						InputProps={{
							endAdornment: (
								<InputAdornment position="end">
									<IconButton edge="end" aria-label="file" onClick={this.loadFile}>
										<SvgIcon>
											<path d="M4 1c-.55 0-.99.45-.99 1L3 16c0 .55.44 1 1 1h10c.55 0 1-.45 1-1V6l-5-5H4zm6 5V2l4 4h-4z" />
										</SvgIcon>
									</IconButton>
								</InputAdornment>
							)	,
						}}
						/>
					</div>
			);
		}
	}
}

export default ParameterInput;
