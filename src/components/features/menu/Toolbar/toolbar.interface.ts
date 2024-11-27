import { CategoryIf } from '@/common/types';
import { ButtonHTMLAttributes } from 'react';

export interface ToolbarProps {
	items: CategoryIf[];
}

export interface ToolbarItemProps
	extends ButtonHTMLAttributes<HTMLButtonElement> {
	title: string;
	isActive?: boolean;
}
