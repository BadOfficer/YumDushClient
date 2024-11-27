import { ProductIf } from '@/common/types';
import { ReactNode } from 'react';

export interface CatalogProps {
	children: ReactNode;
}

export interface CatalogItemProps {
	to: string;
	item: ProductIf;
}
