import { useDropdown } from '@/hooks/useDropdown';
import { useOutsideClick } from '@/hooks/useOutsideClick';
import { useTheme } from '@/hooks/useTheme';
import { FC } from 'react';
import { createPortal } from 'react-dom';
import { DropdownChildProps } from './dropdown.interface';
import styles from './dropdown.module.scss';

const DropdownBody: FC<DropdownChildProps> = ({
	children,
	className,
	name,
}) => {
	const { position, isVisibleId, setState } = useDropdown();
	const { theme } = useTheme();

	const { top, right, left } = position;

	const ref = useOutsideClick(() => setState(''), false);

	if (isVisibleId !== name || !top || !left || !right) return null;

	return createPortal(
		<div className={styles[theme]} ref={ref}>
			<ul
				style={
					right
						? {
								top: top + 10,
								right: window.innerWidth - right,
						  }
						: left
						? {
								top: top + 10,
								left: left,
						  }
						: {}
				}
				className={`${styles['dropdown__body']} ${className}`}
			>
				{children}
			</ul>
		</div>,
		document.body
	);
};

export default DropdownBody;
