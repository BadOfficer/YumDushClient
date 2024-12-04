import { categories } from '@/common/data';
import Catalog from '@/components/features/Menu/Catalog/Catalog';
import Tollbar from '@/components/features/Menu/Toolbar/Toolbar';
import Container from '@/components/ui/Container/Container';
import { FC } from 'react';
import styles from './Menu.module.scss';
import PageHeading from '@/components/layout/PageHeading/PageHeading';

const Menu: FC = () => {
	return (
		<Container className={styles.menu}>
			<PageHeading title='Our Menu' withSearch />
			<Tollbar items={categories} />
			<Catalog />
		</Container>
	);
};

export default Menu;
