import { useTheme } from '@/hooks/useTheme';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { FC, useEffect, useState } from 'react';

import { useCustomParams } from '@/hooks/useCustomParams';
import Button from '../Button/Button';
import { PaginationProps } from './pagination.interface';
import styles from './pagination.module.scss';

const Pagination: FC<PaginationProps> = ({
	totalElements,
	limit = 10,
	path = '/',
}) => {
	const { theme } = useTheme();
	const { item, handleSetItem, navigate } = useCustomParams('page');
	const [pagesNumber, setPagesNumber] = useState<number[]>([]);

	const curPage = item ? Number(item) : 1;
	const totalPages = Math.ceil(totalElements / limit);
	const rangeSize = 10;
	const rangeStart = Math.floor((curPage - 1) / rangeSize) * rangeSize + 1;
	const rangeEnd = Math.min(curPage + rangeSize - 1, totalPages);

	useEffect(() => {
		const newPages = Array.from(
			{ length: rangeEnd - rangeStart + 1 },
			(_, i) => rangeStart + i
		);

		setPagesNumber(newPages);
	}, [rangeStart, rangeEnd, setPagesNumber])

	const handleNext = () => {
		handleSetItem(curPage === totalPages ? totalPages : curPage + 1);
	};

	const handlePrev = () => {
		handleSetItem(curPage === 1 ? 1 : curPage - 1);
	};

	const handleSetPage = (page: number) => {
		handleSetItem(page);
	};

	useEffect(() => {
		if (curPage > totalPages || curPage < 1) {
			navigate(path);
		}
	}, [curPage, totalPages, navigate, path]);

	if (totalPages <= 1) return;

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
				disabled={curPage === totalPages}
				onClick={handleNext}
			>
				<ChevronRight size={20} />
			</Button>
		</div>
	);
};

export default Pagination;
