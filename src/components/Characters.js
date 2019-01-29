import React from 'react';
import Body from './Body';

const Characters=(props)=>{
	const charImg=(i,s)=>{
		return <img src={`https://render-us.worldofwarcraft.com/character/proudmoore/144/12345-main.jpg?alt=/wow/static/images/2d/avatar/${i}-${s}.jpg`} />
	}
	var headerNames=['Name','Faction','Image']
	var tdValues=['name','side','image']
	return(
		<Body header={headerNames} tdValues={tdValues} charImg={charImg} type='races' />
	)
}

export default Characters;