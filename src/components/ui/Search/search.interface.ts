import { InputHTMLAttributes, ReactNode } from 'react';

export interface SearchProps extends InputHTMLAttributes<HTMLInputElement> {
	type?: 'text';
	icon?: ReactNode;
}
