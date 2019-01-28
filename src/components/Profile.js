import React, {Component} from 'react';
import axios from 'axios';
import {Col, Row, Table} from 'reactstrap';
export default class Profile extends Component{
	constructor(props){
		super(props);
		this.state={data:[]}
	}
	componentDidMount(){
		axios.get(`https://us.api.blizzard.com/wow/character/tichondrius/Diglover?locale=en_US&access_token=${process.env.REACT_APP_WOW_API_KEY}`)
		.then((res)=>{
			console.log(res)
			this.setState({data:res['data']})
		})
		.catch((err)=>{
			console.log(err)
		})
	}


	render(){

		const profileImg=(k)=> {
			return <img src={`http://render-us.worldofwarcraft.com/character/${k}`} />
		}
		return(
			<Row>
				<Col xs='3'>{profileImg(this.state.data.thumbnail)}</Col>
				<Col xs='9'>
					<Table>
						<thead>
							<th>Name</th>
							<th>Realm</th>
							<th>Achievement Points</th>
							<th>Honorable Kills</th>
							<th>Battle Group</th>
						</thead>
						<tbody>
							<tr>
								<td>{this.state.data.name}</td>
								<td>{this.state.data.realm}</td>
								<td>{this.state.data.achievementPoints}</td>
								<td>{this.state.data.totalHonorableKills}</td>
								<td>{this.state.data.battlegroup}</td>
							</tr>
						</tbody>
					</Table>
				</Col>
			</Row>
		)
	}
}