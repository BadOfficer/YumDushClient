import { PUBLIC_ROUTES } from '@config/url.config';
import { useTheme } from '@hooks/useTheme';
import { FC } from 'react';

import styles from './navbar.module.scss';
import NavbarItem from './NavbarItem';

const Navbar: FC = () => {
	const { theme } = useTheme();

	return (
		<nav className={`${styles.navbar} ${styles[theme]}`}>
			<ul className={styles['navbar__list']}>
				{PUBLIC_ROUTES.filter((route) => route.requiredAuth).map((route) => (
					<NavbarItem to={route.path} key={route.path}>
						<li>{route.displayName}</li>
					</NavbarItem>
				))}
			</ul>
		</nav>
	);
};

export default Navbar;
