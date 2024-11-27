import { FC } from 'react';
import { TableRowProps } from './table.interface';
import styles from './table.module.scss';

const TableRow: FC<TableRowProps> = ({ children }) => {
	return <tr className={styles['table__row']}>{children}</tr>;
};

export default TableRow;
