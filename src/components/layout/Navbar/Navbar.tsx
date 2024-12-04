import { useTheme } from '@hooks/useTheme';
import { FC } from 'react';

import styles from './navbar.module.scss';
import NavbarItem from './NavbarItem';
import { ROUTES } from '@/config/url.config';

const Navbar: FC = () => {
	const { theme } = useTheme();

	return (
		<nav className={`${styles.navbar} ${styles[theme]}`}>
			<ul className={styles['navbar__list']}>
				<NavbarItem to={ROUTES.home.path}>
					Home
				</NavbarItem>
				<NavbarItem to={ROUTES.menu.path}>
					Menu
				</NavbarItem>
				<NavbarItem to={ROUTES.orders.path}>
					Orders
				</NavbarItem>
				<NavbarItem to={ROUTES.cart.path}>
					Cart
				</NavbarItem>
				<NavbarItem to={ROUTES.dashboard.path}>
					Dashboard
				</NavbarItem>
			</ul>
		</nav>
	);
};

export default Navbar;
