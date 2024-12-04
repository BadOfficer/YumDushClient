import { FC } from 'react';
import { TableRowProps } from './table.interface';
import styles from './table.module.scss';

export const TableRow: FC<TableRowProps> = ({ children, isHeader = false }) => {
	return <tr className={isHeader ? styles['table__header-row'] : styles['table__row']}>{children}</tr>;
};
