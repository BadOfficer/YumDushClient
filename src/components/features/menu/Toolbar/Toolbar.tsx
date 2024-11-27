import { categories } from '@/common/data';
import { useCustomParams } from '@/hooks/useCustomParams';
import { useTheme } from '@/hooks/useTheme';
import { FC, useEffect } from 'react';
import ToolbarItem from './ToolbarItem';
import { ToolbarProps } from './toolbar.interface';
import styles from './toolbar.module.scss';

const Tollbar: FC<ToolbarProps> = ({ items }) => {
	const { theme } = useTheme();
	const { item, handleSetItem, navigate } = useCustomParams('category');
	const activeItem = item ? item : categories[0].id;

	const handleSelect = (item: string) => {
		handleSetItem(item);
	};

	useEffect(() => {
		if (categories.filter((item) => item.id === activeItem).length === 0) {
			navigate('/menu');
		}
	}, [activeItem, navigate]);

	return (
		<section className={`${styles.categories} ${styles[theme]}`}>
			<ul className={styles['toolbar__list']}>
				{items.map((category) => (
					<ToolbarItem
						key={category.id}
						title={category.title}
						isActive={activeItem === category.id}
						onClick={() => handleSelect(category.id)}
					/>
				))}
			</ul>
		</section>
	);
};

export default Tollbar;
