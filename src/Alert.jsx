import React, {useEffect} from 'react';
import {useGlobalContext} from './Context/context';

const Alert = () => {
	const {state, dispatch} = useGlobalContext();

	const alertActionHundler = () => {
		if (state.alertAction === 'add') {
			return (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 24 24'
					fill='currentColor'
					className='w-8 h-8 border border-slate-300 rounded-xl fill-green-500 dark:fill-green-600 dark:border-slate-700'>
					<path
						fillRule='evenodd'
						d='M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z'
						clipRule='evenodd'
					/>
				</svg>
			);
		} else if (state.alertAction === 'delete') {
			return (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 24 24'
					fill='currentColor'
					className='w-7 h-7 p-0.5 border border-slate-300 rounded-xl fill-red-500 dark:fill-red-600 dark:border-slate-700'>
					<path
						fillRule='evenodd'
						d='M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z'
						clipRule='evenodd'
					/>
				</svg>
			);
		} else if (state.alertAction === 'value') {
			return (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 24 24'
					fill='currentColor'
					className='w-7 h-7 border border-slate-300 rounded-xl fill-orange-500 dark:fill-orange-600 dark:border-slate-700'>
					<path
						fillRule='evenodd'
						d='M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z'
						clipRule='evenodd'
					/>
				</svg>
			);
		}
	};

	useEffect(() => {
		const timeout = setTimeout(() => {
			dispatch({type: 'ALERT_OUT'});
		}, 2000);

		return () => clearTimeout(timeout);
	});
	return (
		<div
			className={`${
				state.alert ? 'translate-x-0' : 'translate-x-[150%]'
			} absolute right-8 top-6 border border-slate-200 rounded-lg shadow flex items-center justify-between p-3.5 w-72 transition-transform dark:bg-slate-900 dark:border-slate-700 dark:shadow-none`}>
			<div className='flex items-center gap-4'>
				<div className='flex items-center justify-center'>
					{alertActionHundler()}
				</div>
				<p className='font-bold text-slate-600 dark:text-slate-300/90'>
					{state.alertContent}
				</p>
			</div>
			<div className='flex items-center gap-2'>
				<svg
					onClick={() => dispatch({type: 'ALERT_OUT'})}
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 24 24'
					fill='currentColor'
					className='w-7 h-7 fill-slate-300 hover:bg-slate-200/30 hover:cursor-pointer rounded-full p-0.5 transition-colors dark:hover:bg-slate-500/30 dark:fill-slate-500'>
					<path
						fillRule='evenodd'
						d='M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z'
						clipRule='evenodd'
					/>
				</svg>
			</div>
		</div>
	);
};

export default Alert;
