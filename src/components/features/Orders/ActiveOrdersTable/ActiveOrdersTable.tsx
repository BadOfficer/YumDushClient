import { orders } from '@/common/data';
import { OrderStatus } from '@/common/enums';
import Dropdown from '@/components/ui/Dropdown/Dropdown';
import Table from '@/components/ui/Table/Table';
import TableBody from '@/components/ui/Table/TableBody';
import TableCell from '@/components/ui/Table/TableCell';
import TableHeader from '@/components/ui/Table/TableHeader';
import TableRow from '@/components/ui/Table/TableRow';
import { EllipsisVertical } from 'lucide-react';
import { FC } from 'react';

import Button from '@/components/ui/Button/Button';
import Pagination from '@/components/ui/Pagination/Pagination';
import ProfileAvatar from '@/components/ui/ProfileAvatar/ProfileAvatar';
import styles from './active-orders.module.scss';

const ACTIVE_ORDERS = orders.filter(
	(order) => order.status === OrderStatus.ACTIVE
);

const ActiveOrdersTable: FC = () => {
	return (
		<section className={styles.orders}>
			<Table>
				<TableHeader>
					<TableRow>
						<TableCell isHeaderCell={true}>Order #</TableCell>
						<TableCell isHeaderCell={true}>Customer</TableCell>
						<TableCell isHeaderCell={true}>Status</TableCell>
						<TableCell isHeaderCell={true}>Total</TableCell>
						<TableCell isHeaderCell={true}>Created</TableCell>
						<TableCell isHeaderCell={true}>Action</TableCell>
						<TableCell isHeaderCell> </TableCell>
					</TableRow>
				</TableHeader>
				<TableBody>
					{ACTIVE_ORDERS.map((order) => (
						<TableRow key={order.id}>
							<TableCell className={styles['order__id']}>#{order.id}</TableCell>
							<TableCell>
								<div className={styles['order__user-avatar']}>
									<ProfileAvatar avatar={order.avatar} />
									{order.fullName}
								</div>
							</TableCell>
							<TableCell>
								<div className={styles['order__status']}>
									<div className={styles[order.status]} />
									{order.status}
								</div>
							</TableCell>
							<TableCell>${order.total}</TableCell>
							<TableCell className={styles['order__created']}>
								{order.created}
							</TableCell>
							<TableCell className={styles['order__action']}>
								<Button intent='primary'>Select</Button>
							</TableCell>
							<TableCell className={styles['order__trigger']}>
								<Dropdown>
									<Dropdown.Trigger name={`active-${order.id}-order`}>
										<EllipsisVertical />
									</Dropdown.Trigger>
									<Dropdown.Body name={`active-${order.id}-order`}>
										<Dropdown.Item>Show Details</Dropdown.Item>
									</Dropdown.Body>
								</Dropdown>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
			<Pagination
				totalElements={ACTIVE_ORDERS.length}
				limit={2}
				path='/orders'
			/>
		</section>
	);
};

export default ActiveOrdersTable;
