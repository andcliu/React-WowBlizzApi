import React,{Component} from 'react';
import {Table} from 'reactstrap';
import axios from 'axios';
export default class SharedTable extends Component{
	constructor(props){
		super(props);
		this.convertArray=this.convertArray.bind(this);
		this.state={data:[]}
	}

	componentDidMount(){
		var param=``;
		if(this.props.type==='mounts'){
			param=`mount/`
		}else if(this.props.type==='races'){
			param=`data/character/races`
		}else if(this.props.type==='bosses'){
			param=`boss/`
		}

		axios.get(`https://us.api.blizzard.com/wow/${param}?locale=en_US&access_token=${process.env.REACT_APP_WOW_API_KEY}`)
		.then((res)=>{
			this.setState({data:res.data[this.props.type]})
		})
		.catch((err)=>{
			console.log(err)
		})
	}
  convertArray=(obj) =>{
    const item=[];
    Object.keys(obj).forEach(function(key) {
      item.push(obj[key]);
    });

    return item;
  };

	render(){
		const header=this.props.header.map((k)=>{
			return(
				<th>{k}</th>
			)
		});
		const data=this.convertArray(this.state.data);
		const parsedData=data.map((k,i)=> {
			return(
				<tr>
					{this.props.tdValues.map((e)=> {
						{if(e==='isFlying'){
							return <td>Flying: {k[e] ? 'Yes' : 'No'}</td>
						}else if(e==='isGround'){
							return <td>Ground: {k[e] ? 'Yes' : 'No'}</td>
						}else if(e==='image'){
							return <td>{this.props.charImg(k.id,0)} - {this.props.charImg(k.id,1)}</td>
						}else{
							return<td>{k[e]}</td>
						}}
					})}
				</tr>
			)
		});
		console.log(parsedData);

		return(	
			<Table>
				<thead>
					{header}
				</thead>
				<tbody>
					{parsedData}
				</tbody>
			</Table>
		)
	}
}

