import React,{Component} from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
// import SwipeableViews from 'react-swipeable-views'
import AppBar from  '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import { Paper } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import { Link, Route, BrowserRouter, Switch } from 'react-router-dom'
//import CSSTransitionGroup from 'react-transition-group'
import Home from './home'
import NewUser from './new_user'

function TabContainer({ childern , dir }) {
	return (
		<Typography component="div" dir={dir} style={{ padding: 8 * 3}}>
			{childern}
		</Typography>
	);
}

TabContainer.propsTypes = {
	childern: PropTypes.node.isRequired,
	dir: PropTypes.string.isRequired
}

const styles = theme => ({
	root: {
		backgroundColor: theme.palette.background.paper,
		//width: 500
	}
});

class NavTabs extends Component {
	state = {
		value: 0
	};

	handleChange = ( event , value ) => {
		this.setState({value});
	};

	handleChangeIndex = index => {
		this.setState({ value: index });
	};

	render() {
		const {classes, theme} = this.props;
		return(
			<BrowserRouter>
				<div className={classes.root}>
					<AppBar position="static" color="default">
						<Tabs
							value={this.state.value}
							onChange={this.handleChange}
							indicatorColor="primary"
							textColor="primary"
							//fullWidth
						>
							<Tab label="Listing" component={Link} to="/" />
							<Tab label="NewUser" component={Link} to="new_user" />
						</Tabs>	
					</AppBar>
					<Switch>
						<Route exact path="/" component={TabOne} />
            <Route exact path="/new_user" component={TabTwo} />
					</Switch>
				</div>
			</BrowserRouter>
		)
	}
}

NavTabs.propTypes = {
	classes: PropTypes.object.isRequired,
	theme: PropTypes.object.isRequired
};

function TabOne() {
	return(
		<Paper>
			<div>
				<Home />
			</div>
		</Paper>
	)
}

function TabTwo() {
	return(
		<Paper>
			<div>
				<NewUser />
			</div>
		</Paper>
	)
}

// const PageShell = (Page, previous) => {
// 	return props => (
// 		<div className="page">
// 			<CSSTransitionGroup
// 				transitionAppear={true}
// 				transitionAppearTimeout={600}
// 				transitionEnterTimeout={600}
// 				transitionAppearLeaveTimeout={600}
// 				transitionName={props.match.path === "/" ? "SlideIn" : "SlideOut"}
// 			>
// 				{console.log(props)}
// 				<Page {...props} />
// 			</CSSTransitionGroup>
// 		</div>	
// 	)
// }


export default withStyles(styles, {withTheme: true})(NavTabs);