import { useTheme } from '@/hooks/useTheme';
import { FC } from 'react';
import { TableProps } from './table.interface';
import styles from './table.module.scss';

const Table: FC<TableProps> = ({ children }) => {
	const { theme } = useTheme();

	return (
		<table className={`${styles['table']} ${styles[theme]}`}>{children}</table>
	);
};

export default Table;
