import { DropDownType } from '@/common/enums';
import { ReactNode } from 'react';
import DropdownBody from './DropdownBody';
import DropdownItem from './DropdownItem';
import { DropdownTrigger } from './DropdownTrigger';

export interface DropdownProps {
	children: ReactNode;
	type?: DropDownType;
}

export interface DropdownPosition {
	left: number;
	right: number;
	top: number;
}

export interface DropdownStaticProps {
	Body: typeof DropdownBody;
	Trigger: typeof DropdownTrigger;
	Item: typeof DropdownItem;
}

export interface DropdownChildProps {
	children: ReactNode;
	className?: string;
	name: string;
}
