import React from 'react';
import Item from './Item';
import {useGlobalContext} from '../Context/context';

const Items = () => {
	const {state} = useGlobalContext();
	return (
		<div className='w-[28rem]'>
			{state.activities.map((item) => {
				const {id, activity, time} = item;
				return <Item key={id} id={id} activity={activity} time={time} />;
			})}
		</div>
	);
};

export default Items;
