import React, {useContext, useReducer, useState} from 'react';
import {reducer} from '../reducer';

const defaultState = {
	activities: [],
	validation: false,
	darkTheme: false,
	alertContent: '',
	alertAction: '',
	alert: false,
};

const AppContext = React.createContext();

const AppProvider = ({children}) => {
	const [state, dispatch] = useReducer(reducer, defaultState);

	const [localTime, setLocalTime] = useState(
		new Date().toLocaleString('en-US', {
			hour: 'numeric',
			minute: 'numeric',
			hour12: true,
		})
	);

	// THEME HUNDLER
	const toggleTheme = () => {
		const switchOn = new Audio('/switch-on.wav');
		const switchOff = new Audio('/switch-off.wav');

		if (state.darkTheme) {
			switchOff.play();
		} else {
			switchOn.play();
		}

		dispatch({type: 'TOGGLE_THEME'});
		document.body.classList.toggle('dark');
	};

	return (
		<AppContext.Provider
			value={{toggleTheme, state, dispatch, localTime, setLocalTime}}>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};

export {AppContext, AppProvider};
