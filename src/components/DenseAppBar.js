import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

class DenseAppBar extends React.Component {
	render(){
	  return (
	      <AppBar position="static">
	        <Toolbar variant="dense">
	          <IconButton edge="start" color="inherit" aria-label="Menu" onClick={this.props.onClick}>
	            <MenuIcon />
	          </IconButton>
	          <Typography variant="h6" color="inherit">
	            <span style={{color:'rgb(255, 77, 71)', fontWeight:'bold'}}>SURF</span>gui
	          </Typography>
	        </Toolbar>
	      </AppBar>
	  );
	}
}
export default DenseAppBar;
