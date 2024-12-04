import { FC } from 'react';
import { TableProps } from './table.interface';
import styles from './table.module.scss';
import { TableRow } from './TableRow';
import { TableBody } from './TableBody';
import { TableHeader } from './TableHeader';
import { TableCell } from './TableCell';
import { TableHeaderCell } from './TableHeaderCell';

const Table: FC<TableProps> = ({ children }) => {
	return (
		<table className={styles['table']}>{children}</table>
	);
};

export default {
	Wrapper: Table,
	Row: TableRow,
	Body: TableBody,
	Header: TableHeader,
	Cell: TableCell,
	HeaderCell: TableHeaderCell
};
