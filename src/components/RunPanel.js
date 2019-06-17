import React from 'react'
import Paper from '@material-ui/core/Paper';

import OutputContainer from './OutputContainer';

class RunPanel extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			containers: [],
		}
		this.currentCont = null;
		this.errUpdate = this.errUpdate.bind(this);
		this.outUpdate = this.outUpdate.bind(this);
		this.detachOut = this.detachOut.bind(this);
	}
	errUpdate(err) {
		if (this.currentCont == null){
			this.currentCont = React.createRef();
			let newCont = <OutputContainer ref={this.currentCont} />
			this.setState({ containers : this.state.containers.concat(newCont)});
		}
		this.currentCont.current.errUpdate(err);
	}
	outUpdate(out) {
		if (this.currentCont == null){
			this.currentCont = React.createRef();
			let newCont = <OutputContainer ref={this.currentCont} />
			this.setState({ containers : this.state.containers.concat(newCont)});
		}
		this.currentCont.current.outUpdate(out);
	}
	detachOut() {
		this.currentCont.current.detach();
		this.currentCont = null;
	}
	render () {
		return (
			<Paper className="terminal-paper" elevation={6} style={{overflow: 'auto'}}>
				{this.state.containers}
			</Paper>
		);
	}
}

export default RunPanel;
