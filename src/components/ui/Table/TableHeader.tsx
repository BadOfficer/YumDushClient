import { FC } from 'react';
import { TableSectionProps } from './table.interface';

export const TableHeader: FC<TableSectionProps> = ({ children }) => {
	return <thead>{children}</thead>;
};
