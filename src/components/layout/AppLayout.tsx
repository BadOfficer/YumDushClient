import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../layout/Header/Header';

const AppLayout: FC = () => {
	return (
		<>
			<Header />
			<main>
				<Outlet />
			</main>
		</>
	);
};

export default AppLayout;
