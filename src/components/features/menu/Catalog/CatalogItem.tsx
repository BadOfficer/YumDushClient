import Button from '@/components/ui/Button/Button';
import Counter from '@/components/ui/Counter/Counter';
import { useTheme } from '@/hooks/useTheme';
import { ShoppingBag, Star } from 'lucide-react';
import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { CatalogItemProps } from './catalog.interface';
import styles from './сatalog.module.scss';

const CatalogItem: FC<CatalogItemProps> = ({ to, item }) => {
	const { title, description, price, sizes, image, rating, discount } = item;

	const { theme } = useTheme();
	const [activeSize, setActiveSize] = useState(sizes[0]);

	return (
		<li
			className={`${styles['catalog__item']} ${styles['item']} ${styles[theme]}`}
		>
			<div className={styles['item__image']}>
				<Link to={to}>
					{discount && <div className={styles['item__discount']}>Discount</div>}
					<img src={image} alt={title} />
				</Link>
			</div>
			<div className={styles['item__content']}>
				<div className={styles['item__header']}>
					<Link to={to}>
						<h2>{title}</h2>
					</Link>
					<div className={styles['item__rating']}>
						<Star size={16} />
						<span>{rating}</span>
					</div>
				</div>
				<p>{description}</p>
				<ul className={styles['item__sizes']}>
					{sizes.map((size) => (
						<li
							className={`${styles['item__size']} ${
								activeSize === size ? styles['active'] : ''
							}`}
							onClick={() => setActiveSize(size)}
							key={size}
						>
							{size}
						</li>
					))}
				</ul>
				<div className={styles['item__footer']}>
					<Counter min={1} />
					<div className={styles['item__prices']}>
						<span className={discount ? styles['item__old-price'] : ''}>
							${price}
						</span>
						{discount && <span>${discount}</span>}
					</div>
					<Button className={styles['item__cart-btn']} intent='primary'>
						<ShoppingBag size={16} />
						Add to cart
					</Button>
				</div>
			</div>
		</li>
	);
};

export default CatalogItem;
