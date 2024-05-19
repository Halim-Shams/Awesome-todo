import React from 'react';
import Form from './Form';
import Items from './Item/Items';
import Alert from './Alert';
import {AppProvider} from './Context/context';

const TodoApp = () => {
	return (
		<AppProvider>
			<div className='bg-white min-h-screen flex flex-col gap-16 items-center pt-20 dark:bg-slate-900 relative overflow-hidden'>
				<Alert />
				<Form />
				<Items />
			</div>
		</AppProvider>
	);
};

export default TodoApp;
