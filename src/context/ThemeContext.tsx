import { createContext, FC, ReactNode, useLayoutEffect } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

interface ThemeContextIf {
	theme: 'light' | 'dark';
	toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextIf>({
	theme: 'light',
	toggleTheme: () => {},
});

interface ThemeProviderIf {
	children: ReactNode;
}

export const ThemeProvider: FC<ThemeProviderIf> = ({ children }) => {
	const [theme, setTheme] = useLocalStorage('light', 'color-theme');

	const toggleTheme = () => {
		setTheme((curTheme: string) => (curTheme === 'light' ? 'dark' : 'light'));
	};

	useLayoutEffect(() => {
		document.documentElement.setAttribute('data-theme', theme)
	}, [theme]);

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};
