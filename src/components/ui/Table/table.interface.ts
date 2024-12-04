import { ReactNode, TableHTMLAttributes } from 'react';

export interface TableProps extends TableHTMLAttributes<HTMLTableElement> {
	children: ReactNode;
}

export interface TableSectionProps
	extends TableHTMLAttributes<HTMLTableSectionElement> {
	children: ReactNode;
}

export interface TableCellProps
	extends TableHTMLAttributes<HTMLTableCellElement> {
	children: ReactNode;
}

export interface TableRowProps
	extends TableHTMLAttributes<HTMLTableRowElement> {
	children: ReactNode;
	isHeader?: boolean;
}
