import { useDropdown } from '@/hooks/useDropdown';
import { FC, ReactNode } from 'react';
import styles from './dropdown.module.scss';

const DropdownItem: FC<{ children: ReactNode; className?: string }> = ({
	children,
	className,
}) => {
	const { setState } = useDropdown();

	return (
		<li
			onClick={() => setState('')}
			className={`${styles['dropdown__item']} ${className}`}
		>
			{children}
		</li>
	);
};

export default DropdownItem;
