import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { NavbarItemProps } from './navbar.interface';
import styles from './navbar.module.scss';

const NavbarItem: FC<NavbarItemProps> = ({ to, children, ...props }) => {
	return (
		<NavLink
			to={to}
			{...props}
			className={({ isActive }) =>
				isActive
					? `${styles['navbar__item']} ${styles.active}`
					: styles['navbar__item']
			}
		>
			<li>
				{children}
			</li>
		</NavLink>
	);
};

export default NavbarItem;
