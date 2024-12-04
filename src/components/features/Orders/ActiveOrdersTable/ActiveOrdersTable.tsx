import { orders } from '@/common/data';
import { OrderStatus } from '@/common/enums';
import Table from '@/components/ui/Table/Table';
import { EllipsisVertical, ReceiptText } from 'lucide-react';
import { FC } from 'react';

import Button from '@/components/ui/Button/Button';
import Pagination from '@/components/ui/Pagination/Pagination';
import ProfileAvatar from '@/components/ui/ProfileAvatar/ProfileAvatar';
import styles from './active-orders.module.scss';
import Dropdown from '@/components/ui/Dropdown/Dropdown';

const ACTIVE_ORDERS = orders.filter(
	(order) => order.status === OrderStatus.ACTIVE
);

const ActiveOrdersTable: FC = () => {
	return (
		<section className={styles.orders}>
			<Table.Wrapper>
				<Table.Header>
					<Table.Row isHeader>
						<Table.HeaderCell>Order #</Table.HeaderCell>
						<Table.HeaderCell>Customer</Table.HeaderCell>
						<Table.HeaderCell>Status</Table.HeaderCell>
						<Table.HeaderCell>Total</Table.HeaderCell>
						<Table.HeaderCell>Created</Table.HeaderCell>
						<Table.HeaderCell>Action</Table.HeaderCell>
						<Table.HeaderCell> </Table.HeaderCell>
					</Table.Row>
				</Table.Header>
				<Table.Body>
					{ACTIVE_ORDERS.map((order) => (
						<Table.Row key={order.id}>
							<Table.Cell className={styles['order__id']}>#{order.id}</Table.Cell>
							<Table.Cell>
								<div className={styles['order__user-avatar']}>
									<ProfileAvatar avatar={order.avatar} />
									{order.fullName}
								</div>
							</Table.Cell>
							<Table.Cell>
								<div className={styles['order__status']}>
									<div className={styles[order.status]} />
									{order.status}
								</div>
							</Table.Cell>
							<Table.Cell>${order.total}</Table.Cell>
							<Table.Cell className={styles['order__created']}>
								{order.created}
							</Table.Cell>
							<Table.Cell className={styles['order__action']}>
								<Button intent='primary'>Select</Button>
							</Table.Cell>
							<Table.Cell className={styles['order__trigger']}>
								<Dropdown.Wrapper>
									<Dropdown.Trigger elementFor={order.id}>
										<EllipsisVertical />
									</Dropdown.Trigger>
									<Dropdown.Body name={order.id} type="right" margin={0}>
										<Dropdown.Item><ReceiptText size={18}/>Show Details</Dropdown.Item>
									</Dropdown.Body>
								</Dropdown.Wrapper>
							</Table.Cell>
						</Table.Row>
					))}
				</Table.Body>
			</Table.Wrapper>
			<Pagination
				totalElements={ACTIVE_ORDERS.length}
				limit={2}
				path='/orders'
			/>
		</section>
	);
};

export default ActiveOrdersTable;
