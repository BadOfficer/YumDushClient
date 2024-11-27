import { ChangeEvent, forwardRef, useState } from 'react';
import { InputProps } from './input.interface';
import styles from './input.module.scss';

const Input = forwardRef<HTMLInputElement, InputProps>(
	({ children, ...props }, ref) => {
		const [hasValue, setHasValue] = useState(false);

		const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
			setHasValue(e.target.value !== '');

			if (props.onChange) {
				props.onChange(e);
			}
		};

		return (
			<div className={styles.input}>
				<div className={styles['input__content']}>
					<input
						{...props}
						ref={ref}
						onChange={handleChange}
						className={hasValue ? styles.filled : ''}
					/>
					{children && !(props.type === 'date') ? (
						<label htmlFor={props.id}>{children}</label>
					) : null}
				</div>
			</div>
		);
	}
);

export default Input;
