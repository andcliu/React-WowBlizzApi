import React, {Component} from 'react';
import Bosses from './Bosses';
import Mounts from './Mounts';
import Profile from './Profile';
import Characters from './Characters';
import Navigation from './Navigation';
import {Container} from 'reactstrap';

export default class Main extends Component{
	render(){
		return(
			<Container>
				<Navigation Profile={Profile} Bosses={Bosses} Mounts={Mounts} Characters={Characters} />
			</Container>
		)
	}
}