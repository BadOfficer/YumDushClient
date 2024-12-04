import { FC } from 'react';
import { TableCellProps } from './table.interface';
import styles from './table.module.scss';

export const TableCell: FC<TableCellProps> = ({
	children,
	className,
}) => {
	return (
		<td className={`${styles['table__cell']} ${className}`}>{children}</td>
	);
};
