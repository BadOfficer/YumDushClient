import { DropdownContext } from '@/context/DropdownContext';
import { useContext } from 'react';

export function useDropdown() {
	const context = useContext(DropdownContext);

	if (!context)
		throw new Error('Dropdown was used outside of DropdownProvider');

	return context;
}
