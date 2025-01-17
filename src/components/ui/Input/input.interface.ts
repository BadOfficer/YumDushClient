import { InputHTMLAttributes, ReactNode } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	children?: ReactNode;
	type?: 'text' | 'tel' | 'email' | 'password';
}
