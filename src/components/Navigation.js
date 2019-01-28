import React, {Component} from 'react'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import { Nav, NavItem, NavLink } from 'reactstrap';

export default class Navigation extends Component{

	render(){

		return(
		  <Router>
		    <div>
		      <Nav>
		        <NavItem>
		          <NavLink><Link to="/">Profile</Link></NavLink>
		        </NavItem>
		        <NavItem>
		          <NavLink><Link to="/Characters">Characters</Link></NavLink>
		        </NavItem>
		        <NavItem>
		          <NavLink><Link to="/Bosses">Bosses</Link></NavLink>
		        </NavItem>
		        <NavItem>
		          <NavLink><Link to="/Mounts">Mounts</Link></NavLink>
		        </NavItem>
		      </Nav>
		      <Route exact path="/" component={this.props.Profile} />
		      <Route path="/Characters" component={this.props.Characters} />
		      <Route path="/Bosses" component={this.props.Bosses} />
		      <Route path="/Mounts" component={this.props.Mounts} />
		    </div>
		  </Router>
		)
	}
}