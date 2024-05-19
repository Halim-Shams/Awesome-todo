export const reducer = (state, action) => {
	if (action.type === 'ADD_TASK') {
		const newTask = action.payload;
		return {
			...state,
			activities: [...state.activities, newTask],
			alertAction: 'add',
			alertContent: 'Task added',
			alert: true,
		};
	}
	if (action.type === 'NO_VALUE') {
		return {
			...state,
			validation: true,
			alertAction: 'value',
			alertContent: 'Enter a task',
			alert: true,
		};
	}
	if (action.type === 'DELETE_TASK') {
		const id = action.payload;
		return {
			...state,
			activities: state.activities.filter((task) => task.id !== id),
			alertAction: 'delete',
			alertContent: 'Task deleted',
			alert: true,
		};
	}
	if (action.type === 'TOGGLE_THEME') {
		return {
			...state,
			darkTheme: !state.darkTheme,
		};
	}
	if (action.type === 'TIME_OUT') {
		return {
			...state,
			validation: false,
		};
	}
	if (action.type === 'ALERT_OUT') {
		return {
			...state,
			alert: false,
		};
	}
};
