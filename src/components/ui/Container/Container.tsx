import { FC } from 'react';
import { ContainerProps } from './container.interface';

const Container: FC<ContainerProps> = ({ children, className }) => {
	return <div className={`container ${className}`}>{children}</div>;
};

export default Container;
