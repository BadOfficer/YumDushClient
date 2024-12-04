import ProfileAvatar from '@/components/ui/ProfileAvatar/ProfileAvatar';
import { formatEmail } from '@/utils/formatEmail';
import { EllipsisVertical, LogOut, Settings } from 'lucide-react';
import { FC } from 'react';
import { UserProfileProps } from './header.interface';
import styles from './header.module.scss';
import Dropdown from '@/components/ui/Dropdown/Dropdown';
import { Link } from 'react-router-dom';
import { ROUTES } from '@/config/url.config';

const UserProfile: FC<UserProfileProps> = ({ username, avatar, email }) => {
	return (
		<div className={`${styles['user']} ${styles['header__user']}`}>
			<ProfileAvatar avatar={avatar} />
			<div className={styles['user__trigger']}>
					<div className={styles['user__data']}>
						<h2>{username}</h2>
						<span>{formatEmail(email, 25)}</span>
					</div>
					<Dropdown.Wrapper>
						<Dropdown.Trigger elementFor='user-profile'><EllipsisVertical size={40} /></Dropdown.Trigger>
						<Dropdown.Body name='user-profile' type='right'>
							<Link to={ROUTES.settings.path} >
								<Dropdown.Item><Settings size={16}/>Settings</Dropdown.Item>
							</Link>
							<Link to={ROUTES.home.path} className={styles['logout-btn']}>
								<Dropdown.Item><LogOut size={16}/>Logout</Dropdown.Item>
							</Link>
						</Dropdown.Body>
					</Dropdown.Wrapper>
			</div>
		</div>
	);
};

export default UserProfile;
