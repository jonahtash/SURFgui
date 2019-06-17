import React from 'react';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import CircularProgress from '@material-ui/core/CircularProgress';
import SvgIcon from '@material-ui/core/SvgIcon';

import RunPanel from './RunPanel';
import NavigationPanel from './NavigationPanel';
import LogFilePanel from './LogFilePanel';

class FormRunProgram extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			loading: false,
		}

		this.runPanel = React.createRef();
		this.errUpdate = this.errUpdate.bind(this);
		this.outUpdate = this.outUpdate.bind(this);
		this.detachOut = this.detachOut.bind(this);
		this.setLoading = this.setLoading.bind(this);
	}
	errUpdate(err) {
		this.runPanel.current.errUpdate(err);
	}
	outUpdate(out) {
		this.runPanel.current.outUpdate(out);
	}
	detachOut() {
		this.runPanel.current.detachOut();
	}
	setLoading(v) {
		this.setState({loading:v});
	}
	render () {
		return (
			<div className="run-wrapper">
				<Paper className="run-paper-outer">
					<LogFilePanel />
					<RunPanel ref={this.runPanel} stdout={this.props.stdout} stderr={this.props.stderr}/>
					<div className="run-button-panel">
						{this.state.loading && <CircularProgress size={68} className="button-loader"/>}
						<Fab variant="extended" aria-label="Run" color="secondary" size="large" className="run-button" onClick={this.props.runProgram} disabled={this.state.loading}>
							<SvgIcon>
								<path d="M8 5v14l11-7z" />
							</SvgIcon>
						</Fab>
					</div>
				</Paper>
				<NavigationPanel prevStep={this.props.prevStep} nextStep={this.props.nextStep} hasNext={false} hasPrev={true} />
			</div>
		);
	}
}

export default FormRunProgram;
