import { ReactNode } from 'react';

export interface ListProps {
	render: (item: any) => ReactNode;
	items: any[];
}
