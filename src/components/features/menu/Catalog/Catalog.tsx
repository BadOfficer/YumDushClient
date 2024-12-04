import { products } from '@/common/data';
import Pagination from '@/components/ui/Pagination/Pagination';
import { createSlug } from '@/utils/createSlug';
import styles from './сatalog.module.scss';
import CatalogItem from './CatalogItem';

const Catalog = () => {
	return (
		<section className={styles['catalog']}>
			<ul className={styles['catalog__list']}>
				{products.map((product) => <CatalogItem
						item={product}
						to={`/${createSlug(product.title)}`}
						key={product.id}
					/>)}
			</ul>
			<Pagination
				totalElements={products.length}
				limit={5}
				path='/menu'
			/>
		</section>
	);
};

export default Catalog;
