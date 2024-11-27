import { FC, ReactNode } from 'react';
import styles from './form.module.scss';

const FormRow: FC<{ children: ReactNode }> = ({ children }) => {
	return <div className={styles['form__row']}>{children}</div>;
};

export default FormRow;
