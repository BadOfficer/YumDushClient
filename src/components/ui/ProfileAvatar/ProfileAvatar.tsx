import { CircleUser } from 'lucide-react';
import { FC } from 'react';

import styles from './profile-avatar.module.scss';

const ProfileAvatar: FC<{ avatar: string }> = ({ avatar }) => {
	return (
		<div className={styles['avatar']}>
			{avatar ? <img src={avatar} alt='user avatar' /> : <CircleUser />}
		</div>
	);
};

export default ProfileAvatar;
