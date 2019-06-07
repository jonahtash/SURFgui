import React from 'react'
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class SelectedPanel extends React.Component {
	render () {
		return (
			<div>
				<Paper className="selected-panel-outer">
					<Typography variant="h6" style={{display: 'inline-block', marginRight:'10px'}}>Selected: </Typography>
					<Paper className="selected-panel-inner"><Typography variant="h6">{this.props.program ?  this.props.program.prog_label : ''}</Typography></Paper>
					<Button variant="contained" color="primary"className="next-button" onClick={this.props.nextStep}>Next</Button>
				</Paper>
			</div>
		);
	}
}

export default SelectedPanel;
