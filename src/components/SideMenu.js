import React from 'react';
import Drawer from '@material-ui/core/Drawer';

import SideMenuList from './SideMenuList';

class SideMenu extends React.Component {
	render () {
		return (
			<Drawer open={this.props.open} onClose={this.props.onDrawerClose}>
				<SideMenuList runClick={this.props.runClick} modClick={this.props.modClick} />
			</Drawer>
		);
	}
}

export default SideMenu;
