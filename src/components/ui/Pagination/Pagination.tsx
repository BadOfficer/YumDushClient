import { useTheme } from '@/hooks/useTheme';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { FC, useEffect } from 'react';

import { useCustomParams } from '@/hooks/useCustomParams';
import Button from '../Button/Button';
import { PaginationProps } from './pagination.interface';
import styles from './pagination.module.scss';

const Pagination: FC<PaginationProps> = ({
	totalElements,
	limit = 10,
	initialPage = 1,
	path = '/',
}) => {
	const { theme } = useTheme();
	const { item, handleSetItem, navigate } = useCustomParams('page');

	const curPage = item ? Number(item) : 1;
	const countOfPages = Math.ceil(totalElements / limit);

	const pagesNumber = Array.from(
		{ length: countOfPages },
		(_, i) => initialPage + i
	);

	const handleNext = () => {
		handleSetItem(curPage === countOfPages ? countOfPages : curPage + 1);
	};

	const handlePrev = () => {
		handleSetItem(curPage === 1 ? 1 : curPage - 1);
	};

	const handleSetPage = (page: number) => {
		handleSetItem(page);
	};

	useEffect(() => {
		if (curPage > countOfPages || curPage < 1) {
			navigate(path);
		}
	}, [curPage, countOfPages, navigate, path]);

	if (countOfPages <= 1) return;

	return (
		<div className={`${styles.pagination} ${styles[theme]}`}>
			<Button
				disabled={curPage === 1}
				className={styles['pagination__arrow-btn']}
				onClick={handlePrev}
			>
				<ChevronLeft size={20} />
			</Button>
			{pagesNumber.map((page) => (
				<Button
					key={page}
					className={`${styles['pagination__page-btn']} ${
						page === curPage ? styles['active'] : ''
					}`}
					onClick={() => {
						handleSetPage(page);
					}}
				>
					{page}
				</Button>
			))}
			<Button
				className={styles['pagination__arrow-btn']}
				disabled={curPage === countOfPages}
				onClick={handleNext}
			>
				<ChevronRight size={20} />
			</Button>
		</div>
	);
};

export default Pagination;
