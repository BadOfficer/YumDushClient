import { FC } from 'react';
import { TableSectionProps } from './table.interface';

const TableBody: FC<TableSectionProps> = ({ children }) => {
	return <tbody>{children}</tbody>;
};

export default TableBody;
