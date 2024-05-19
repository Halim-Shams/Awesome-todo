import React from 'react';
import {useGlobalContext} from '../Context/context';

const Item = ({id, activity, time}) => {
	const {dispatch} = useGlobalContext();

	const hundleDelete = (id) => {
		dispatch({type: 'DELETE_TASK', payload: id});
	};

	return (
		<div className='relative w-full flex items-center justify-between pr-3 rounded-lg hover:bg-slate-100/80 transition-colors group overflow-hidden dark:hover:bg-slate-700/60'>
			<div className='flex items-center'>
				<div className='inline-flex items-center'>
					<label
						className='relative flex items-center p-3 rounded-full cursor-pointer'
						htmlFor='customStyle'>
						<input
							type='checkbox'
							className="before:content[''] peer relative h-[1.3rem] w-[1.3rem] cursor-pointer appearance-none rounded-full border border-yellow-400 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-yellow-400 checked:bg-yellow-400 hover:scale-105 hover:before:opacity-0"
							id='customStyle'
						/>
						<span className='absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100 dark:text-slate-900'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='h-3.5 w-3.5'
								viewBox='0 0 20 20'
								fill='currentColor'
								stroke='currentColor'
								strokeWidth='1'>
								<path
									fillRule='evenodd'
									d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
									clipRule='evenodd'></path>
							</svg>
						</span>
					</label>
				</div>
				<p className='text-slate-800 text-lg capitalize dark:text-slate-400'>
					{activity}
				</p>
			</div>
			<div className='flex items-center gap-3'>
				<p className='text-slate-800 font-thin text-sm absolute right-11 translate-y-[145%] group-hover:translate-y-0 delay-200 transition-all dark:text-slate-500'>
					{time}
				</p>
				<svg
					onClick={() => hundleDelete(id)}
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					strokeWidth={1.5}
					stroke='currentColor'
					className='w-5 h-5 text-red-500 hover:cursor-pointer hover:scale-105 transition-transform'>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0'
					/>
				</svg>
			</div>
		</div>
	);
};

export default Item;
