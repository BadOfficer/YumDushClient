import { FC } from 'react';
import { loader, LoaderProps } from '.';

const Loader: FC<LoaderProps> = ({ size, className, intent }) => {
	return <div className={loader({ size, intent, className })}></div>;
};

export default Loader;
