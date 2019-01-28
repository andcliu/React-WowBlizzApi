import React from 'react';
import SharedTable from './sharedTable';

const Bosses = (props) =>{
	var headerNames=['Name','Health','Level','Description']
	var tdValues=['name','health','level','description']
	return(
		<SharedTable header={headerNames} tdValues={tdValues} type='bosses' />
	)
}

export default Bosses;