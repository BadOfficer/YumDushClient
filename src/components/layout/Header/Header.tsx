import Button from '@components/ui/Button/Button';
import Logo from '@components/ui/Logo/Logo';

import { useTheme } from '@hooks/useTheme';
import { Moon, Sun } from 'lucide-react';
import { FC } from 'react';
import { Link } from 'react-router-dom';

import { user } from '@/common/data';
import Container from '@/components/ui/Container/Container';
import Navbar from '../Navbar/Navbar';
import styles from './header.module.scss';
import UserProfile from './UserProfile';

const USER = user;

const Header: FC = () => {
	const { theme, toggleTheme } = useTheme();

	return (
		<header className={`${styles.header} ${styles[theme]}`}>
			<Container className={styles['header__content']}>
				<div className={styles['header__logo']}>
					<Logo />
				</div>
				<Navbar />
				<div className={styles['header__btns']}>
					<Button className={styles['header__theme-btn']} onClick={toggleTheme}>
						{theme === 'dark' ? <Sun /> : <Moon />}
					</Button>
					{!USER ? (
						<>
							<Link to='/sign-in'>
								<Button intent='secondary'>Sign-in</Button>
							</Link>
							<Link to='/sign-up'>
								<Button intent='primary'>Sign-up</Button>
							</Link>
						</>
					) : (
						<UserProfile
							username={user.fullName}
							avatar={user.avatar}
							email={user.email}
						/>
					)}
				</div>
			</Container>
		</header>
	);
};

export default Header;
