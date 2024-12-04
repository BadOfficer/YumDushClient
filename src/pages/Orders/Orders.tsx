import ActiveOrdersTable from '@/components/features/Orders/ActiveOrdersTable/ActiveOrdersTable';
import Container from '@/components/ui/Container/Container';
import styles from './order.module.scss';
import PageHeading from '@/components/layout/PageHeading/PageHeading';

const Orders = () => {
	return (
		<Container className={styles['orders']}>
			<PageHeading title='Orders' />
			<section className={styles['orders__table']}>
				<ActiveOrdersTable />
			</section>
		</Container>
	);
};

export default Orders;
