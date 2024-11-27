import { useDropdown } from '@/hooks/useDropdown';
import { useElementPosition } from '@/hooks/useElementPosition';
import { useOutsideClick } from '@/hooks/useOutsideClick';
import { FC, MouseEvent, ReactNode, useLayoutEffect, useRef } from 'react';
import styles from './dropdown.module.scss';

export const DropdownTrigger: FC<{
	children: ReactNode;
	topGap?: number;
	name: string;
}> = ({ children, topGap = 0, name }) => {
	const { setPosition, isVisibleId, setState } = useDropdown();

	const ref = useOutsideClick(() => {}, false);
	const trigger = useRef<HTMLButtonElement | null>(null);
	const { top, right, bottom, left } = useElementPosition(trigger.current);

	useLayoutEffect(() => {
		if (top && bottom && right && left) {
			setPosition({
				top: bottom,
				right: right,
				left: left,
			});
		}
	}, [top, right, bottom, setPosition, left, topGap]);

	const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
		e.stopPropagation();

		if (isVisibleId === name) {
			setState('');
		} else {
			setState(name);
		}
	};

	return (
		<button
			onClick={handleClick}
			ref={(node) => {
				trigger.current = node;
				ref.current = node;
			}}
			className={styles['dropdown__trigger']}
		>
			{children}
		</button>
	);
};
