import React from 'react'
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Collapse from '@material-ui/core/Collapse';

import ParameterPanel from './ParameterPanel';
import NavigationPanel from './NavigationPanel';

class FormConfigProgram extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			formCompleted: false
		}
		this.makeChange = this.makeChange.bind(this);
	}

	makeChange(v) {
		this.setState({formCompleted : v})
	}
	render () {

		return(
			<div  className="config-wrapper">
			<Box component="div">
				<Collapse in={!this.state.formCompleted} collapsedHeight="25vh">
					<div>
						<Paper className="config-program-paper">
							<div className="param-text-div">
								<Typography variant="h4">
										{this.props.program.prog_label + " Parameters"}
								</Typography>
							</div>
							<ParameterPanel program={this.props.program} handleChange={this.makeChange}/>
						</Paper>
					</div>
			</Collapse>

			</Box>
			<footer>
				<Box component="div" className="foot-div">
					<NavigationPanel prevStep={this.props.prevStep} />
				</Box>
			</footer>
			</div>
			);
	}
}

export default FormConfigProgram;
