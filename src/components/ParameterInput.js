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
		this.getValue = this.getValue.bind(this);
		this.loadFolder = this.loadFolder.bind(this);
	}

	loadFolder () {
		let path = dialog.showOpenDialog({ properties: ['openDirectory'] })
		if (path) {
			this.setState({value: path[0]});
			this.props.handleChange(path[0], this.props.parameter);
		} else {
				console.log("No file selected");
		}
	}
	loadFile () {
		let path;
		path = dialog.showOpenDialog();
		if (path) {
			this.setState({value: path[0]});
			this.props.handleChange(path[0], this.props.parameter);
		} else {
				console.log("No file selected");
		}
	}
	onChange(e) {
		this.setState({value: e.target.value})
		this.props.handleChange(e.target.value, this.props.parameter);
	}
	setValue(value) {
		this.setState({value: value});
		this.props.handleChange(value, this.props.parameter);
	}
	getValue() {
		return (this.state.value);
	}
	render () {
		let p;
		if (this.props.parameter.type == "string") {
			p = null;
		}
		if (this.props.parameter.type == "file") {
			p = {
				endAdornment: (
					<InputAdornment position="end">
						<IconButton edge="end" aria-label="file" onClick={this.loadFile}>
							<SvgIcon>
								<path d="M4 1c-.55 0-.99.45-.99 1L3 16c0 .55.44 1 1 1h10c.55 0 1-.45 1-1V6l-5-5H4zm6 5V2l4 4h-4z" />
							</SvgIcon>
						</IconButton>
					</InputAdornment>
				)	,
			}
		}
		if (this.props.parameter.type == "folder") {
			p = {
						endAdornment: (
							<InputAdornment position="end">
								<IconButton edge="end" aria-label="file" onClick={this.loadFolder}>
									<SvgIcon>
										<path d="M10 5L8 3H3c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1h-5z" />
									</SvgIcon>
								</IconButton>
							</InputAdornment>
						)
					};
		}
		return (
			<div>
				<TextField id={this.props.parameter.id}  helperText={this.props.parameter.desc} value={this.state.value} label={this.props.parameter.label} margin="normal" variant="outlined" className="param-input"
					onChange={this.onChange}
					InputProps={p}
					/>
				</div>
		);
	}
}

export default ParameterInput;
