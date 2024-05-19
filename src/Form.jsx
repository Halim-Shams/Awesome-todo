import React, {useEffect, useRef} from 'react';
import {useGlobalContext} from './Context/context';

const Form = () => {
	console.log('form rendered');
	const {state, dispatch, toggleTheme, localTime, setLocalTime} =
		useGlobalContext();
	const taskRef = useRef(null);

	const hundleSubmit = (e) => {
		e.preventDefault();

		// Get time
		const time = new Date();
		if (taskRef.current.value.length > 1) {
			setLocalTime(
				time.toLocaleString('en-US', {
					hour: 'numeric',
					minute: 'numeric',
					hour12: true,
				})
			);

			const newTask = {
				id: new Date().getTime().toString(),
				activity: taskRef.current.value,
				time: localTime,
			};
			dispatch({type: 'ADD_TASK', payload: newTask});
			taskRef.current.value = null;
		} else {
			dispatch({type: 'NO_VALUE'});
		}
	};

	useEffect(() => {
		const timeout = setTimeout(() => {
			dispatch({type: 'TIME_OUT'});
		}, 1000);
		return () => clearTimeout(timeout);
	}, [state.validation]);

	return (
		<div className='w-[28rem] flex flex-col items-start gap-6'>
			<div className='flex items-center w-full justify-between'>
				<p className='text-4xl uppercase font-bold bg-gradient-to-r from-yellow-400 to-rose-500 bg-clip-text text-transparent dark:text-slate-300'>
					Todo App
				</p>
				<button
					onClick={() => toggleTheme()}
					className='text-lg bg-slate-100 hover:bg-slate-100/50 active:scale-90 transition-all px-0.5 rounded-full dark:bg-slate-700'>
					{state.darkTheme ? '☀️' : '🌙'}
				</button>
			</div>
			<form
				onSubmit={hundleSubmit}
				className={`${
					state.validation
						? 'bg-gradient-to-br from-red-400/50 to-red-200/20 dark:bg-gradient-to-br dark:from-red-500/50 dark:bg-red-600/20 transition-colors'
						: 'bg-slate-100'
				} w-full flex items-center justify-between gap-2 p-2 rounded-lg text-slate-800 hover:drop-shadow-md transition-all dark:bg-slate-700 dark:drop-shadow-none dark:text-slate-300`}>
				<input
					autoFocus={true}
					ref={taskRef}
					type='text'
					placeholder='Task name'
					className='bg-transparent px-2 text-lg outline-none flex-1'
				/>
				<button
					type='submit'
					className='text-white bg-gradient-to-br from-yellow-400 to-rose-500 px-6 py-2 text-lg rounded-md font-semibold active:scale-95 transition-transform dark:from-slate-900 dark:to-slate-900'>
					Add
				</button>
			</form>
		</div>
	);
};

export default Form;
