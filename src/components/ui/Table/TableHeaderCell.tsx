import { FC } from "react"
import { TableCellProps } from "./table.interface"
import styles from './table.module.scss';

export const TableHeaderCell: FC<TableCellProps> = ({children, className}) => {
    return <th className={`${styles['table__header-cell']} ${className}`}>{children}</th>
}