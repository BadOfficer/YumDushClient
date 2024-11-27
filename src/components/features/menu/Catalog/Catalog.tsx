import { products } from '@/common/data';
import List from '@/components/ui/List/List';
import Pagination from '@/components/ui/Pagination/Pagination';
import { createSlug } from '@/utils/createSlug';
import CatalogItem from './CatalogItem';
import styles from './сatalog.module.scss';

const Catalog = () => {
	return (
		<div className={styles.catalog}>
			<List
				items={products}
				render={(product) => (
					<CatalogItem
						item={product}
						to={`/${createSlug(product.title)}`}
						key={product.id}
					/>
				)}
			/>
			<Pagination
				totalElements={products.length}
				limit={10}
				initialPage={1}
				path='/menu'
			/>
		</div>
	);
};

export default Catalog;
