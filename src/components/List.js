import React from 'react';

const List = (data) => {
	console.log('*** List, data', data);

	return (
		<div className='list'>
			<ul>
				{data.goods.map(item => <li key={item.id}>{item.title}</li>)}
			</ul>
		</div>
	)
}

export default List;