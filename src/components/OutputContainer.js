import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grow from '@material-ui/core/Grow';
import Divider from '@material-ui/core/Divider';

class OutputContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			stderr: '',
			stdout: '',
			detached: false,
		}
		this.errUpdate = this.errUpdate.bind(this);
		this.outUpdate = this.outUpdate.bind(this);
	}
	errUpdate(err) {
		this.setState({stderr: this.state.stderr + err});
	}
	outUpdate(out) {
		this.setState({stdout: this.state.stdout + out});
	}
	detach() {
		this.setState({detached: true});
	}
	render () {
		return (
			<div>
				<div className="stdout">
						{this.state.stdout.split ('\n').map ((item, i) => <p key={i}>{item}</p>)}
				</div>
				<div className="stderr">
						{this.state.stderr.split ('\n').map ((item, i) => <p key={i}>{item}</p>)}
				</div>
				<Grow in={this.state.detached}>
					<div>
						<Divider className="run-hr"/>
					</div>
				</Grow>
			</div>
		);
	}
}

export default OutputContainer;
