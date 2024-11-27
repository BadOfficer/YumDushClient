import { FC } from 'react';
import { TableSectionProps } from './table.interface';

const TableHeader: FC<TableSectionProps> = ({ children }) => {
	return <thead>{children}</thead>;
};

export default TableHeader;
