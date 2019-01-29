import React from 'react';
import Body from './Body';

const Mounts=(props)=>{
	var headerNames=['Name','Icon','Type'];
	var tdValues=['name','icon','isGround','isFlying'];
	return(
		<Body header={headerNames} tdValues={tdValues} type='mounts' />
	)
}

export default Mounts;