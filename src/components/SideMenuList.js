import React from 'react';
import PlayIcon from '@material-ui/icons/PlayArrow';
import EditIcon from '@material-ui/icons/Edit';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';

class SideMenuList extends React.Component {
	render () {
		return (
			<div style={{overflow: 'auto'}}>
				<List component="nav" aria-label="Config List">
						<ListItem button key="run" onClick={this.props.runClick}>
							<ListItemIcon><PlayIcon /></ListItemIcon>
							<ListItemText primary="Run" />
						</ListItem>
						<ListItem button key="mod" onClick={this.props.modClick}>
							<ListItemIcon><EditIcon /></ListItemIcon>
							<ListItemText primary="Modify" />
						</ListItem>
				</List>
			</div>
		);
	}
}

export default SideMenuList;
