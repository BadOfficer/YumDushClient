import { DropDownType } from '@/common/enums';
import { DropdownPosition } from '@/components/ui/Dropdown/dropdown.interface';
import { createContext, Dispatch, SetStateAction } from 'react';

interface DropdownContextIf {
	isVisibleId: string;
	setState: Dispatch<SetStateAction<string>>;
	position: DropdownPosition;
	setPosition: Dispatch<SetStateAction<DropdownPosition>>;
	type: DropDownType;
}

export const DropdownContext = createContext<DropdownContextIf | null>(null);
