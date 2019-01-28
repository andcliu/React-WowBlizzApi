import React from 'react';
import SharedTable from './sharedTable';

const Mounts=(props)=>{
	var headerNames=['Name','Icon','Type'];
	var tdValues=['name','icon','isGround','isFlying'];
	return(
		<SharedTable header={headerNames} tdValues={tdValues} type='mounts' />
	)
}

export default Mounts;