import { Utensils } from 'lucide-react';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './logo.module.scss';

const Logo: FC = () => {
	return (
		<Link to='/' className={styles.logo}>
			<Utensils />
			<h1>YumDush</h1>
		</Link>
	);
};

export default Logo;
