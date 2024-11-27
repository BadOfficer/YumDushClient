import { DropDownType } from '@/common/enums';
import { DropdownContext } from '@/context/DropdownContext';
import { useTheme } from '@/hooks/useTheme';
import { FC, useState } from 'react';
import {
	DropdownPosition,
	DropdownProps,
	DropdownStaticProps,
} from './dropdown.interface';
import styles from './dropdown.module.scss';
import DropdownBody from './DropdownBody';
import DropdownItem from './DropdownItem';
import { DropdownTrigger } from './DropdownTrigger';

type DropdownType = FC<DropdownProps> & DropdownStaticProps;

const Dropdown: DropdownType = ({ children, type = DropDownType.RIGHT }) => {
	const [isVisibleId, setIsVisibleId] = useState<string>('');
	const [position, setPosition] = useState<DropdownPosition>({
		top: 0,
		right: 0,
		left: 0,
	});
	const { theme } = useTheme();

	return (
		<DropdownContext.Provider
			value={{
				isVisibleId,
				setState: setIsVisibleId,
				position,
				setPosition,
				type,
			}}
		>
			<div className={styles[theme]}>{children}</div>
		</DropdownContext.Provider>
	);
};

Dropdown.Body = DropdownBody;
Dropdown.Trigger = DropdownTrigger;
Dropdown.Item = DropdownItem;

export default Dropdown;
