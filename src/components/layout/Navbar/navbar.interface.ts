import { AnchorHTMLAttributes, ReactNode } from 'react';

export interface NavbarItemProps
	extends AnchorHTMLAttributes<HTMLAnchorElement> {
	to: string;
	children: ReactNode;
}
