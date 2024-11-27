import { FC } from 'react';
import { ListProps } from '.';
import styles from './list.module.scss';

const List: FC<ListProps> = ({ render, items }) => {
	return <ul className={styles['list']}>{items.map(render)}</ul>;
};

export default List;
