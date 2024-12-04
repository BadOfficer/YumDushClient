import { FC } from 'react';
import { ContainerProps } from './container.interface';
import styles from './container.module.scss';

const Container: FC<ContainerProps> = ({ children, className }) => {
	return <div className={`${styles['container']} ${className}`}>{children}</div>;
};

export default Container;
