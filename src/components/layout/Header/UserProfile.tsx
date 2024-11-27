import { DropDownType } from '@/common/enums';
import Dropdown from '@/components/ui/Dropdown/Dropdown';
import ProfileAvatar from '@/components/ui/ProfileAvatar/ProfileAvatar';
import { useTheme } from '@/hooks/useTheme';
import { formatEmail } from '@/utils/formatEmail';
import { EllipsisVertical, LogOut, Settings } from 'lucide-react';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { UserProfileProps } from './header.interface';
import styles from './header.module.scss';

const UserProfile: FC<UserProfileProps> = ({ username, avatar, email }) => {
	const { theme } = useTheme();

	return (
		<div className={`${styles['user']} ${styles['header__user']}`}>
			<ProfileAvatar avatar={avatar} />
			<Dropdown type={DropDownType.RIGHT}>
				<div className={styles['user__trigger']}>
					<div className={styles['user__data']}>
						<h2>{username}</h2>
						<span>{formatEmail(email, 25)}</span>
					</div>
					<Dropdown.Trigger topGap={10} name='header-user-profile'>
						<EllipsisVertical />
					</Dropdown.Trigger>
				</div>
				<Dropdown.Body name='header-user-profile'>
					<Link to='/settings'>
						<Dropdown.Item>
							<Settings size={17} /> Settings
						</Dropdown.Item>
					</Link>
					<div className={styles[theme]}>
						<div className={styles['split-line']}></div>
					</div>
					<Link to='/' className={styles.logout}>
						<Dropdown.Item>
							<LogOut size={16} /> Logout
						</Dropdown.Item>
					</Link>
				</Dropdown.Body>
			</Dropdown>
		</div>
	);
};

export default UserProfile;
