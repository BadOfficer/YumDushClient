import { categories } from '@/common/data';
import Catalog from '@/components/features/menu/Catalog/Catalog';
import Heading from '@/components/features/menu/Heading/Heading';
import Tollbar from '@/components/features/menu/Toolbar/Toolbar';
import Container from '@/components/ui/Container/Container';
import { FC } from 'react';
import styles from './Menu.module.scss';

const Menu: FC = () => {
	return (
		<Container className={styles.menu}>
			<Heading>Our Menu</Heading>
			<Tollbar items={categories} />
			<Catalog />
		</Container>
	);
};

export default Menu;
