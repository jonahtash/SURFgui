import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';

class ProgramList extends React.Component {

	render () {
		let listItems = this.props.programs.map((prog, i) =>
			<ListItem key={prog.prog_id} button onClick={()=> this.props.onProgramSelect(prog)}>
				<ListItemText key={prog.prog_id} primary={prog.prog_label}/>
			</ListItem>
		).reduce((accu, elem) => accu === null ? [elem] : [...accu, <Divider /> , elem], null);

		return(
			<Paper elevation={4} className="prog-paper">
				<List component="nav" aria-label="Program List">
					<Divider />
					{listItems}
					<Divider />
				</List>
			</Paper>
		);
	}
}

export default ProgramList;
