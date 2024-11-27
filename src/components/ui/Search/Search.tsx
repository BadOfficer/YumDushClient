import { useCustomParams } from '@/hooks/useCustomParams';
import { useTheme } from '@/hooks/useTheme';
import { X } from 'lucide-react';
import { FC, FormEvent, useState } from 'react';
import { SearchProps } from './search.interface';
import styles from './search.module.scss';

const Search: FC<SearchProps> = ({ type, icon, ...props }) => {
	const { theme } = useTheme();
	const [value, setValue] = useState('');

	const { handleSetItem, handleDeleteItem } = useCustomParams('search');

	const handleClear = () => {
		handleDeleteItem();

		setValue('');
	};

	const handleChange = (e: FormEvent<HTMLInputElement>) => {
		const curValue = e.currentTarget.value;

		if (curValue !== '') {
			handleSetItem(curValue);
		} else {
			handleDeleteItem();
		}

		setValue(e.currentTarget.value);
	};

	return (
		<div className={`${styles.search} ${styles[theme]}`}>
			<input
				type={type}
				value={value}
				onChange={(e) => handleChange(e)}
				{...props}
				className={`${icon ? styles['search_active'] : ''}`}
			/>
			{icon && <div className={styles['search__icon']}>{icon}</div>}
			{value !== '' && (
				<button className={styles['search__clear']} onClick={handleClear}>
					<X size={16} />
				</button>
			)}
		</div>
	);
};

export default Search;
