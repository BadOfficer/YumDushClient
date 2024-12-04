import { FC } from 'react';
import { FormProps } from './form.interface';

import styles from './form.module.scss';

const Form: FC<FormProps> = ({ children, className, ...props }) => {
	return (
		<form className={`${styles['form']} ${className}`} {...props}>
			{children}
		</form>
	);
};

export default Form;
