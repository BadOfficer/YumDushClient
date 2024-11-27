import { useTheme } from '@hooks/useTheme';

import { FC } from 'react';

import { button, ButtonProps } from '.';
import styles from './button.module.scss';

const Button: FC<ButtonProps> = ({
	className,
	intent,
	size,
	children,
	...props
}) => {
	const { theme } = useTheme();

	return (
		<button
			className={`${button({ intent, size, className })} ${styles[theme]}`}
			{...props}
		>
			{children}
		</button>
	);
};

export default Button;
