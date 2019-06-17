import React from 'react';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

class ConfigList extends React.Component {
	render () {
		let cs = this.props.configs.map((conf, i) =>
			<ListItem key={conf.id} button onClick={() => this.props.handleListItemClick(conf)}>
				<ListItemText key={conf.id} primary={conf.label}/>
			</ListItem>
		).reduce((accu, elem) => accu === null ? [elem] : [...accu, <Divider /> , elem], null);

		return(
			<div style={{overflow: 'auto'}}>
				<List component="nav" aria-label="Config List">
					<Divider />
					{cs}
					<Divider />
				</List>
			</div>
		);
	}
}

export default ConfigList;
