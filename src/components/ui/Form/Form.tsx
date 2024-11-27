import { useTheme } from '@/hooks/useTheme';
import { FC } from 'react';
import { FormProps } from './form.interface';

import styles from './form.module.scss';

const Form: FC<FormProps> = ({ children, className, ...props }) => {
	const { theme } = useTheme();

	return (
		<form className={`${styles.form} ${styles[theme]} ${className}`} {...props}>
			{children}
		</form>
	);
};

export default Form;
