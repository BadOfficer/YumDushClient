import { useTheme } from '@/hooks/useTheme';
import { FC, InputHTMLAttributes, useState } from 'react';
import styles from './counter.module.scss';

const Counter: FC<InputHTMLAttributes<HTMLInputElement>> = ({ ...props }) => {
	const [value, setValue] = useState(props.min ? Number(props.min) : 1);

	const { theme } = useTheme();

	const increment = () => {
		setValue((prevValue) => (prevValue += 1));
	};

	const decrement = () => {
		setValue((prevValue) => (prevValue > 1 ? (prevValue -= 1) : 1));
	};

	return (
		<div className={`${styles.counter} ${styles[theme]}`}>
			<button onClick={decrement}>-</button>
			<input
				type='text'
				value={value}
				onChange={(e) =>
					setValue(Number(e.target.value) < 1 ? 1 : Number(e.target.value))
				}
				{...props}
			/>
			<button onClick={increment}>+</button>
		</div>
	);
};

export default Counter;
