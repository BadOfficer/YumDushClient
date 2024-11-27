import { FC } from 'react';
import { TableCellProps } from './table.interface';
import styles from './table.module.scss';

const TableCell: FC<TableCellProps> = ({
	children,
	isHeaderCell = false,
	className,
}) => {
	if (isHeaderCell)
		return (
			<th className={`${styles['table__cell']} ${className}`}>{children}</th>
		);

	return (
		<td className={`${styles['table__cell']} ${className}`}>{children}</td>
	);
};

export default TableCell;
