import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export function useTheme() {
	const context = useContext(ThemeContext);

	if (!context)
		throw new Error('ThemeContext was used outside of ThemeProvider');

	return context;
}
