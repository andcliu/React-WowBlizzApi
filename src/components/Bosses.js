import React from 'react';
import Body from './Body';

const Bosses = (props) =>{
	var headerNames=['Name','Health','Level','Description']
	var tdValues=['name','health','level','description']
	return(
		<Body header={headerNames} tdValues={tdValues} type='bosses' />
	)
}

export default Bosses;