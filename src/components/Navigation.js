import React, {Component} from 'react'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import { Nav, NavItem, NavLink} from 'reactstrap';

export default class Navigation extends Component{

	render(){

		return(
		  <Router>
		    <div>
		      <Nav>
		        <NavItem>
		          <NavLink tag={Link} to="/">Profile</NavLink>
		        </NavItem>
		        <NavItem>
		          <NavLink tag={Link} to="/Characters">Characters</NavLink>
		        </NavItem>
		        <NavItem>
		          <NavLink tag={Link} to="/Bosses">Bosses</NavLink>
		        </NavItem>
		        <NavItem>
		          <NavLink tag={Link} to="/Mounts">Mounts</NavLink>
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