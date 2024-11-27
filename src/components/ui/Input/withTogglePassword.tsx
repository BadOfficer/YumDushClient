import { Eye, EyeOff } from 'lucide-react';
import { forwardRef, useState } from 'react';
import Input from './Input';
import { InputProps } from './input.interface';
import styles from './input.module.scss';

export function withTogglePassword(WrappedComponent: typeof Input) {
	const UpdatedComponent = forwardRef<HTMLInputElement, InputProps>(
		({ type, children, ...props }, ref) => {
			const [isPasswordVisible, setIsPasswordVisible] = useState(false);

			const isPasswordType = type === 'password';
			const inputType = isPasswordType && isPasswordVisible ? 'text' : type;

			return (
				<div className={styles['input__toggle-container']}>
					{isPasswordType && (
						<WrappedComponent ref={ref} type={inputType} {...props}>
							{children}
						</WrappedComponent>
					)}
					<button
						className={styles['input__btn']}
						onClick={() => setIsPasswordVisible((state) => !state)}
						type='button'
					>
						{!isPasswordVisible ? <Eye size={16} /> : <EyeOff size={16} />}
					</button>
				</div>
			);
		}
	);

	return UpdatedComponent;
}
