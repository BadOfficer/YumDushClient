import { FC } from 'react';
import { ToolbarItemProps } from './toolbar.interface';
import styles from './toolbar.module.scss';

const ToolbarItem: FC<ToolbarItemProps> = ({ title, isActive, ...props }) => {
	return (
		<li
			className={`${styles['toolbar__item']} ${
				isActive ? styles['toolbar__item_active'] : ''
			}`}
		>
			<button {...props}>{title}</button>
		</li>
	);
};

export default ToolbarItem;
