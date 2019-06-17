import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grow from '@material-ui/core/Grow';
import Divider from '@material-ui/core/Divider';

class OutputContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			outs: [],
			detached: false,
		}
		this.errUpdate = this.errUpdate.bind(this);
		this.outUpdate = this.outUpdate.bind(this);
	}
	errUpdate(err) {
		const newItem = <div className="stderr">{err.split ('\n').map ((item, i) => <p key={i}>{item}</p>)}</div>
		this.setState({outs: this.state.outs.concat(newItem)});
	}
	outUpdate(out) {
		const newItem = <div className="stdout">{out.split ('\n').map ((item, i) => <p key={i}>{item}</p>)}</div>
		this.setState({outs: this.state.outs.concat(newItem)});
	}
	detach() {
		this.setState({detached: true});
	}
	render () {
		return (
			<div>
				{this.state.outs}
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
