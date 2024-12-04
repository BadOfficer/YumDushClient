import { FC } from 'react';

import { button, ButtonProps } from '.';

const Button: FC<ButtonProps> = ({
	className,
	intent,
	size,
	children,
	...props
}) => {
	return (
		<button
			className={button({ intent, size, className })}
			{...props}
		>
			{children}
		</button>
	);
};

export default Button;
