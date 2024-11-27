import ActiveOrdersTable from '@/components/features/Orders/ActiveOrdersTable/ActiveOrdersTable';
import Container from '@/components/ui/Container/Container';
import { useTheme } from '@/hooks/useTheme';
import styles from './order.module.scss';

const Orders = () => {
	const { theme } = useTheme();

	return (
		<Container className={styles[theme]}>
			<section className={`${styles['orders__heading']} ${styles['orders']}`}>
				<h1>Orders</h1>
				<ActiveOrdersTable />
			</section>
		</Container>
	);
};

export default Orders;
