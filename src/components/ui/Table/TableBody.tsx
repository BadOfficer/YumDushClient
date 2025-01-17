import { FC } from 'react';
import { TableSectionProps } from './table.interface';

export const TableBody: FC<TableSectionProps> = ({ children }) => {
	return <tbody>{children}</tbody>;
};
